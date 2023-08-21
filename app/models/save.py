from .db import db, environment, SCHEMA, add_prefix_for_prod

saves = db.Table(
    "saves",
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
    saves.schema = SCHEMA
