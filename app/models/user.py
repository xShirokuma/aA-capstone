from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .user_saves import user_saves


class User(db.Model, UserMixin):
    __tablename__ = "users"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    pins = db.relationship("Pin", back_populates="user")
    comments = db.relationship("Comment", back_populates="user")
    boards = db.relationship("Board", back_populates="user")
    saved_pins = db.relationship(
        "Pin",
        secondary=user_saves,
        back_populates="saved_users",
        cascade="all, delete",
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            # "pins": [pin.to_dict() for pin in self.pins],
            "savedPins": [
                saved_pin.saved_pin_to_dict() for saved_pin in self.saved_pins
            ],
            "boards": [board.to_dict() for board in self.boards],
        }
