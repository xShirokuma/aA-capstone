from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import SubmitField

from ..utils.aws import ALLOWED_EXTENSIONS

class PinForm(FlaskForm):
    image = FileField("Image File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    submit = SubmitField("Create Post")