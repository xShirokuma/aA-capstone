from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length

class PinForm(FlaskForm):
    text = StringField("Text", validators=[DataRequired(), Length(max=255)])
    submit = SubmitField("Submit")