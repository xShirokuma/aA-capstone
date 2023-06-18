from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/')
@login_required
def get_pin_comments():
  pass
