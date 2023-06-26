from app.models import db, Comment, environment, SCHEMA
from sqlalchemy.sql import text
from random import randint

lorem_ipsum = "I'm baby chillwave typewriter truffaut kitsch bicycle rights cornhole ramps chartreuse. Franzen fingerstache cray bushwick pug irony. Post-ironic blue bottle deep v man braid. Chia four loko normcore letterpress art party woke seitan."
min_words = 1
max_words = len(lorem_ipsum.split())
word_list = lorem_ipsum.split()


def seed_comments():
    comments = []

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_1 = Comment(user_id=1, pin_id=1, text=" ".join(rand_word_list))
    comments.append(comment_1)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_2 = Comment(user_id=1, pin_id=2, text=" ".join(rand_word_list))
    comments.append(comment_2)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_3 = Comment(user_id=1, pin_id=3, text=" ".join(rand_word_list))
    comments.append(comment_3)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_4 = Comment(user_id=1, pin_id=4, text=" ".join(rand_word_list))
    comments.append(comment_4)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_5 = Comment(user_id=1, pin_id=5, text=" ".join(rand_word_list))
    comments.append(comment_5)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_6 = Comment(user_id=1, pin_id=6, text=" ".join(rand_word_list))
    comments.append(comment_6)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_7 = Comment(user_id=1, pin_id=7, text=" ".join(rand_word_list))
    comments.append(comment_7)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_8 = Comment(user_id=1, pin_id=8, text=" ".join(rand_word_list))
    comments.append(comment_8)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_9 = Comment(user_id=1, pin_id=9, text=" ".join(rand_word_list))
    comments.append(comment_9)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_10 = Comment(user_id=1, pin_id=10, text=" ".join(rand_word_list))
    comments.append(comment_10)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_11 = Comment(user_id=1, pin_id=11, text=" ".join(rand_word_list))
    comments.append(comment_11)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_12 = Comment(user_id=1, pin_id=12, text=" ".join(rand_word_list))
    comments.append(comment_12)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_13 = Comment(user_id=1, pin_id=13, text=" ".join(rand_word_list))
    comments.append(comment_13)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_14 = Comment(user_id=1, pin_id=14, text=" ".join(rand_word_list))
    comments.append(comment_14)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_15 = Comment(user_id=1, pin_id=15, text=" ".join(rand_word_list))
    comments.append(comment_15)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_16 = Comment(user_id=1, pin_id=16, text=" ".join(rand_word_list))
    comments.append(comment_16)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_17 = Comment(user_id=1, pin_id=17, text=" ".join(rand_word_list))
    comments.append(comment_17)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_18 = Comment(user_id=1, pin_id=18, text=" ".join(rand_word_list))
    comments.append(comment_18)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_19 = Comment(user_id=1, pin_id=19, text=" ".join(rand_word_list))
    comments.append(comment_19)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_20 = Comment(user_id=1, pin_id=20, text=" ".join(rand_word_list))
    comments.append(comment_20)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_21 = Comment(user_id=2, pin_id=1, text=" ".join(rand_word_list))
    comments.append(comment_21)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_22 = Comment(user_id=2, pin_id=2, text=" ".join(rand_word_list))
    comments.append(comment_22)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_23 = Comment(user_id=2, pin_id=3, text=" ".join(rand_word_list))
    comments.append(comment_23)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_24 = Comment(user_id=2, pin_id=4, text=" ".join(rand_word_list))
    comments.append(comment_24)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_25 = Comment(user_id=2, pin_id=5, text=" ".join(rand_word_list))
    comments.append(comment_25)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_26 = Comment(user_id=2, pin_id=6, text=" ".join(rand_word_list))
    comments.append(comment_26)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_27 = Comment(user_id=2, pin_id=7, text=" ".join(rand_word_list))
    comments.append(comment_27)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_28 = Comment(user_id=2, pin_id=8, text=" ".join(rand_word_list))
    comments.append(comment_28)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_29 = Comment(user_id=2, pin_id=9, text=" ".join(rand_word_list))
    comments.append(comment_29)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_30 = Comment(user_id=2, pin_id=10, text=" ".join(rand_word_list))
    comments.append(comment_30)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_31 = Comment(user_id=3, pin_id=1, text=" ".join(rand_word_list))
    comments.append(comment_31)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_32 = Comment(user_id=3, pin_id=2, text=" ".join(rand_word_list))
    comments.append(comment_32)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_33 = Comment(user_id=3, pin_id=3, text=" ".join(rand_word_list))
    comments.append(comment_33)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_34 = Comment(user_id=3, pin_id=4, text=" ".join(rand_word_list))
    comments.append(comment_34)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_35 = Comment(user_id=3, pin_id=5, text=" ".join(rand_word_list))
    comments.append(comment_35)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_36 = Comment(user_id=3, pin_id=6, text=" ".join(rand_word_list))
    comments.append(comment_36)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_37 = Comment(user_id=3, pin_id=7, text=" ".join(rand_word_list))
    comments.append(comment_37)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_38 = Comment(user_id=3, pin_id=8, text=" ".join(rand_word_list))
    comments.append(comment_38)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_39 = Comment(user_id=3, pin_id=9, text=" ".join(rand_word_list))
    comments.append(comment_39)

    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_40 = Comment(user_id=3, pin_id=10, text=" ".join(rand_word_list))
    comments.append(comment_40)

    for comment in comments:
        db.session.add(comment)
        db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()
