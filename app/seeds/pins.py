from app.models import db, Pin, environment, SCHEMA
from sqlalchemy.sql import text
import os, io
from PIL import Image
from ..utils.aws import get_unique_filename, upload_file_to_s3


def seed_pins():
    pass
    # pins = []

    # file_location = os.path.join(
    #     os.getcwd(), "app/seeds/assets/4e44d9b4e508536c644b56a1d89874e8.jpg"
    # )
    # image = Image.open(file_location)
    # memory_file = io.BytesIO()
    # image.filename = get_unique_filename(os.path.basename(file_location))
    # image.save(memory_file, format=image.format)
    # memory_file.seek(0)

    # upload = upload_file_to_s3(image)

    # print(image)
    # print(image.filename)
    # print(upload)

    # pin_1 = Pin(
    #     user_id="1",
    #     title="test image please ignore",
    #     description="test description please ignore",
    #     link="fake.link",
    #     image_filename="4e44d9b4e508536c644b56a1d89874e8.jpg",
    # )

    # db.session.add(pin_1)
    # db.session.commit()


def undo_pins():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.pins RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM pins"))

    db.session.commit()
