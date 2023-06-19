from app.models import db, Comment, environment, SCHEMA
from sqlalchemy.sql import text
from random import randint

lorem_ipsum = "I'm baby chillwave typewriter truffaut kitsch bicycle rights cornhole ramps chartreuse. Franzen fingerstache cray bushwick pug irony. Post-ironic blue bottle deep v man braid. Chia four loko normcore letterpress art party woke seitan."
min_words = 1
max_words = len(lorem_ipsum.split())
word_list = lorem_ipsum.split()

def seed_comments():
    end = randint(min_words, max_words)
    rand_word_list = word_list[:end]
    comment_1 = Comment(
        user_id = 1,
        pin_id = 1,
        text = ' '.join(rand_word_list)
    )
    db.session.add(comment_1)
    db.session.commit()

def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))
        
    db.session.commit()