from datetime import datetime
from sqlalchemy.orm import Session

from . import models, schemas


def get_flight(db: Session, flight_id: int):
    return db.get(models.Flight, flight_id)

def get_flight_by_code(db: Session, flight_code: int):
    return db.query(models.Flight).filter(models.Flight.flight_code == flight_code).first()

def create_flight(db: Session, flight: schemas.FlightBase):
    new_flight = models.Flight(flight_code=flight.flight_code)
    db.add(new_flight)
    db.commit()
    db.refresh(new_flight)
    return new_flight

def get_item(db: Session, item_id: int):
    return db.get(models.Item, item_id)

def get_items(db: Session):
    return db.query(models.Item).order_by(models.Item.item_type).all()

def create_item(db: Session, item: schemas.ItemBase):
    item_type = db.query(models.ItemType).filter(models.ItemType.id == item.item_type_id)
    now = datetime.now()

    new_item = models.Item(
        item_type_id=item.item_type_id,
        expiry_date=item.expiry_date,
        price=item.price,
        discount_percent=0.0,
        item_type=item_type,
        time_added=now,
        tasks=[]
    )

    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return new_item

def apply_discount(db: Session, item: schemas.Item, discount_percent: float):
    item.discount_percent = discount_percent 

def get_item_types(db: Session):
    return db.query(models.ItemType).order_by(models.ItemType.name).all()

def get_item_type(db: Session, item_type_id: int):
    return db.get(models.ItemType, item_type_id)

def get_item_type_by_name(db: Session, item_type_name: str):
    return db.query(models.ItemType).filter(models.ItemType.name == item_type_name).first()

def create_item_type(db: Session, item_type: schemas.ItemTypeBase):
    new_item_type = models.ItemType(
        name=item_type.name,
        category=item_type.category,
        description=item_type.description,
        image=b'0'
    )

    db.add(new_item_type)
    db.commit()
    db.refresh(new_item_type)
    return new_item_type