from app.models import db, Pin, environment, SCHEMA
from sqlalchemy.sql import text

def seed_pins():
    pass
    # pin_1 = Pin(userId='1', 
    #             title='testgirlpleaseignore', 
    #             description='test',
    #             link=None,
    #             file_string="testgirlpleaseignore.jpeg")

    # db.session.add(pin_1)
    # db.session.commit()
    
def undo_pins():
    pass
    # if environment == "production":
    #     db.session.execute(f"TRUNCATE table {SCHEMA}.pins RESTART IDENTITY CASCADE;")
    # else:
    #     db.session.execute(text("DELETE FROM pins"))
        
    # db.session.commit()