from flask import Blueprint, jsonify
from flask_login import current_user, login_required
from app.models import db, User, Pin

user_routes = Blueprint("users", __name__)


@user_routes.route("/")
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route("/<int:id>")
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route("/<int:user_id>/saves/<int:pin_id>", methods=["POST"])
@login_required
def save_pin(user_id, pin_id):
    user = User.query.get(user_id)
    pin = Pin.query.get(pin_id)
    user.saved_pins.append(pin)

    db.session.commit()
    return user.to_dict()


@user_routes.route("/<int:user_id>/saves/<int:pin_id>", methods=["DELETE"])
@login_required
def unsave_pin(user_id, pin_id):
    user = User.query.get(user_id)
    pin = Pin.query.get(pin_id)
    user.saved_pins.remove(pin)

    db.session.commit()
    return user.to_dict()
