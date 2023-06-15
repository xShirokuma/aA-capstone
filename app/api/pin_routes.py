from flask import Blueprint, request
from flask_login import current_user, login_required

from ..models import db, Pin
from ..forms import PinForm
from ..utils.aws import (upload_file_to_s3, get_unique_filename, remove_file_from_s3)

pin_routes = Blueprint("images", __name__)

@pin_routes.route("", methods=["POST"])
@login_required
def upload_image():
    form = PinForm()
 
    if form.validate_on_submit():
          
        image = form.data["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)

        if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
            return render_template("post_form.html", form=form, errors=[upload])

        url = upload["url"]
        new_image = Post(image= url)
        db.session.add(new_image)
        db.session.commit()
        return redirect("/posts/all")

    if form.errors:
        print(form.errors)
        return render_template("post_form.html", form=form, errors=form.errors)

    return render_template("post_form.html", form=form, errors=None)

@pin_routes.route('/')
def get_all_pins():
    pins = Pin.query.all()
    return {'pins': [pin.to_dict() for pin in pins]}