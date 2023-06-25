from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import Length

from ..utils.aws import ALLOWED_EXTENSIONS


class EditPinForm(FlaskForm):
    title = StringField("Name", validators=[Length(max=255)])
    description = StringField("Description", validators=[Length(max=255)])
    link = StringField("Link", validators=[Length(max=255)])
    submit = SubmitField("Create Pin")
