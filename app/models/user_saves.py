from .db import db, environment, SCHEMA, add_prefix_for_prod

user_saves = db.Table(
    "user_saves",
    db.Model.metadata,
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("users.id")),
        primary_key=True,
    ),
    db.Column(
        "pin_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("pins.id")),
        primary_key=True,
    ),
)

if environment == "production":
    user_saves.schema = SCHEMA
