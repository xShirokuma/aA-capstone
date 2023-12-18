from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class BoardSave(db.Model):
    __tablename__ = "board_saves"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    board_id = db.Column(
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("boards.id")),
        nullable=False,
    )
    pin_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("pins.id")), nullable=False
    )

    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    board = db.relationship("Board", back_populates="board_saves")

    def to_dict(self):
        return {
            "id": self.id,
            "boardId": self.board_id,
            "pinId": self.pin_id,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt,
        }
