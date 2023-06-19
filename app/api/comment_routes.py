from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Comment
from app.forms import CommentForm

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/<int:comment_id>', methods=["PUT"])
@login_required
def update_pin_comment(comment_id):
  comment = Comment.query.get(comment_id)
  form = CommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    if form.data["text"]:
        comment.text = form.data["text"]

    db.session.commit()
    return {'comment': comment.to_dict()}
  
@comment_routes.route('/<int:comment_id>', methods=["DELETE"])
@login_required
def delete_pin_comment(comment_id):
  comment = Comment.query.get(comment_id)
  deleted_coment = {'comment': comment.to_dict()}
  db.session.delete(comment)
  db.session.commit()
  return deleted_coment

@comment_routes.route('/', methods=["POST"])
@login_required
def post_pin_comment():
  form = CommentForm()
  form['csrf_token'].data = request.cookies.get('csrf_token')
  content = request.json
  print(f'in route: ${content}')
  if form.validate_on_submit():
    comment = Comment(
      user_id = content["userId"],
      pin_id = content["pinId"],
      text = form.data["text"]
    )
    db.session.add(comment)
    db.session.commit()

    return {'comment': comment.to_dict()}
      

@comment_routes.route('/')
@login_required
def get_pin_comments():
  pass
