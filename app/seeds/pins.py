from app.models import db, Pin, environment, SCHEMA
from sqlalchemy.sql import text
import os, io
from PIL import Image
from ..utils.aws import get_unique_filename, upload_file_to_s3


def seed_pins():
    pins = []

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
    #     image_filename="https://aa-capstone.s3.amazonaws.com/4e44d9b4e508536c644b56a1d89874e8.jpg",
    # )

    # db.session.add(pin_1)
    # db.session.commit()

    pin_1 = Pin(
        user_id="1",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/3fd9857776ffab008bb6c507b975207a.jpg",
    )
    pins.append(pin_1)

    pin_2 = Pin(
        user_id="1",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/4e44d9b4e508536c644b56a1d89874e8.jpg",
    )
    pins.append(pin_2)

    pin_3 = Pin(
        user_id="1",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/4f73df8ace8588753f7e712378814cce.jpg",
    )
    pins.append(pin_3)

    pin_4 = Pin(
        user_id="1",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/06be589723cf92420e9cdcb2568ae069.jpg",
    )
    pins.append(pin_4)

    pin_5 = Pin(
        user_id="1",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/7a99e38c700c616a58e692d71b2969f5.jpg",
    )
    pins.append(pin_5)

    pin_6 = Pin(
        user_id="1",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/7c7f92d7efe1d9ee71b3fa1a83a5a919.jpg",
    )
    pins.append(pin_6)

    pin_7 = Pin(
        user_id="1",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/044b966675e19037f83d31b69844d002.jpg",
    )
    pins.append(pin_7)

    pin_8 = Pin(
        user_id="1",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/540fc79276669ec6e9feaea0f0d12b86.jpg",
    )
    pins.append(pin_8)

    pin_9 = Pin(
        user_id="1",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/778fb6e703c6267f50d601693b0bd822.jpg",
    )
    pins.append(pin_9)

    pin_10 = Pin(
        user_id="1",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/3666d0e92df6782d3162f6330be64c2e.jpg",
    )
    pins.append(pin_10)

    pin_11 = Pin(
        user_id="2",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/6083e6ed3b9e7817038c52a6cd11801c.jpg",
    )
    pins.append(pin_11)

    pin_12 = Pin(
        user_id="2",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/b19377e3e2f18f11a3449581d45f7558.jpg",
    )
    pins.append(pin_12)

    pin_13 = Pin(
        user_id="2",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/bbc811c9c1f7d8f123f11a5da43f4955.jpg",
    )
    pins.append(pin_13)

    pin_14 = Pin(
        user_id="2",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/bcd0999108c19d05c72299ab558c16be.jpg",
    )
    pins.append(pin_14)

    pin_15 = Pin(
        user_id="2",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/e7cdfba56eb281eab908769b0ee127b5.jpg",
    )
    pins.append(pin_15)

    pin_16 = Pin(
        user_id="3",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/eb832ff9670142d98fef17d4a062ecec.jpg",
    )
    pins.append(pin_16)

    pin_17 = Pin(
        user_id="3",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/f71b9cae0419525080c2b2084178d98e.jpg",
    )
    pins.append(pin_17)

    pin_18 = Pin(
        user_id="3",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/f815a856ebd63a446cc5e4e573ce8154.jpg",
    )
    pins.append(pin_18)

    pin_19 = Pin(
        user_id="3",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/f858b814548ab51ff1d81e1bfa3954d7.jpg",
    )
    pins.append(pin_19)

    pin_20 = Pin(
        user_id="3",
        title="test image please ignore",
        description="test description please ignore",
        link="fake.link",
        image_filename="https://aa-capstone.s3.amazonaws.com/f4568815eeda1d51c128d037ca238594.jpg",
    )
    pins.append(pin_20)

    for pin in pins:
        db.session.add(pin)
        db.session.commit()


def undo_pins():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.pins RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM pins"))

    db.session.commit()
