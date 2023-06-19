from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length

class CommentForm(FlaskForm):
    text = StringField("Text", validators=[DataRequired(), Length(max=255)])
    submit = SubmitField("Submit")