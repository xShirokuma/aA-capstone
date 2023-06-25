from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Pin(db.Model):
    __tablename__ = "pins"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False
    )
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255))
    link = db.Column(db.String(255))
    image_filename = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship("User", back_populates="pins")
    comments = db.relationship(
        "Comment", back_populates="pin", cascade="all, delete-orphan"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "title": self.title,
            "description": self.description,
            "link": self.link,
            "image": self.image_filename,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
            "user": self.user.to_dict(),
            "comments": [comment.to_dict() for comment in self.comments],
        }
