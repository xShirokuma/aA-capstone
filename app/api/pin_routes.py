from flask import Blueprint, request
from flask_login import current_user, login_required

from ..models import db, Pin, User
from ..forms import CreatePinForm
from ..utils.aws import upload_file_to_s3, get_unique_filename, remove_file_from_s3

pin_routes = Blueprint("pins", __name__)


@pin_routes.route("/", methods=["POST"])
@login_required
def create_pin():
    form = CreatePinForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    image = request.files["image"]
    print("test pre validate")
    if form.validate_on_submit():
        print("test")
        title = form.data["title"]
        description = form.data["description"]
        link = form.data["link"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)

        if "url" not in upload:
            # if the dictionary doesn't have a url key
            # it means that there was an error when we tried to upload
            # so we send back that error message
            pass
            # return render_template("post_form.html", form=form, errors=[upload])

        image_url = upload["url"]
        new_pin = Pin(
            user_id=current_user.id,
            title=title,
            description=description,
            link=link,
            image_filename=image_url,
        )
        db.session.add(new_pin)
        db.session.commit()

        return {"pin": new_pin.to_dict()}

    if form.errors:
        return form.errors
        # return render_template("post_form.html", form=form, errors=form.errors)

    # return render_template("post_form.html", form=form, errors=None)


@pin_routes.route("/<int:pin_id>", methods=["PUT"])
@login_required
def update_pin(pin_id):
    pin = Pin.query.get(pin_id)
    form = CreatePinForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    pin.title = form.data["title"]
    pin.description = form.data["description"]
    pin.link = form.data["link"]

    db.session.commit()
    return {"pin": pin.to_dict()}


@pin_routes.route("/<int:pin_id>", methods=["DELETE"])
@login_required
def delete_pin(pin_id):
    pin = Pin.query.get(pin_id)
    deleted_pin = {"pin": pin.to_dict()}
    was_deleted = remove_file_from_s3(pin.image_filename)
    print(was_deleted)
    db.session.delete(pin)
    db.session.commit()
    return deleted_pin


@pin_routes.route("/<int:pin_id>")
@login_required
def get_pin(pin_id):
    pin = Pin.query.get(pin_id)
    return {"pin": pin.to_dict()}


@pin_routes.route("/<string:username>")
@login_required
def get_user_pins(username):
    pins = Pin.query.filter(Pin.user.has(username=username))
    return {"pins": [pin.to_dict() for pin in pins]}


@pin_routes.route("/")
def get_all_pins():
    pins = Pin.query.all()
    return {"pins": [pin.to_dict() for pin in pins]}
