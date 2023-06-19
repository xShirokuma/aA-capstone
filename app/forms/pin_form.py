from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange

from ..utils.aws import ALLOWED_EXTENSIONS

class PinForm(FlaskForm):
    title = StringField("Name", validators=[DataRequired(), Length(max=255)])
    description = StringField("Description")
    link = StringField("Link")
    image = FileField("Image File")
    #, validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    submit = SubmitField("Create Pin")