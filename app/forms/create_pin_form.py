from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange

from ..utils.aws import ALLOWED_EXTENSIONS


class CreatePinForm(FlaskForm):
    title = StringField("Name", validators=[Length(max=255)])
    description = StringField("Description", validators=[Length(max=255)])
    link = StringField("Link", validators=[Length(max=255)])
    image = FileField(
        "Image File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))]
    )
    submit = SubmitField("Create Pin")
