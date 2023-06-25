import enum
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Enum, Float, DateTime, LargeBinary
from sqlalchemy.orm import relationship

from .database import Base


class TaskStatus(enum.Enum):
    not_started = "not_started"
    started = "started"
    completed = "completed"
    cancelled = "cancelled"


class CabinType(enum.Enum):
    first = "first"
    business = "business"
    economy = "economy"
    crew = "crew"


class SeatType(enum.Enum):
    middle = "middle"
    window = "window"
    aisle = "aisle"


class TaskPriority(enum.Enum):
    low = "low"
    medium = "medium"
    high = "high"


class ItemCategory(enum.Enum):
    food = "food"
    misc = "misc"


class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    item_type_id = Column(Integer, ForeignKey("item_types.id"))
    price = Column(Float, index=True)
    discount_percent = Column(Float, index=True)
    expiry_date = Column(DateTime, index=True)
    time_added = Column(DateTime, index=True)

    item_type = relationship("ItemType", back_populates="items")
    tasks = relationship("Task", back_populates="associated_item")


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    item_id = Column(Integer, ForeignKey("items.id"))
    description = Column(String)
    priority = Column(Enum(TaskPriority), index=True)
    time_added = Column(DateTime, index=True)
    status = Column(Enum(TaskStatus), index=True)
    time_completed = Column(DateTime, index=True)

    associated_item = relationship("Item", back_populates="tasks")

class ItemType(Base):
    __tablename__ = "item_types"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    category = Column(Enum(ItemCategory), index=True)
    description = Column(String)
    image = Column(LargeBinary)

    items = relationship("Item", back_populates="item_type")


class Seat(Base):
    __tablename__ = "seats"

    id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(Integer, ForeignKey("customers.id"), index=True)
    code = Column(String, index=True)
    cabin = Column(Enum(CabinType), index=True)
    type = Column(Enum(SeatType), index=True)

    customer = relationship("Customer", back_populates="seat")


class Customer(Base):
    __tablename__ = "customers"

    id = Column(Integer, primary_key=True, index=True)
    given_name = Column(String, index=True)
    surname = Column(String, index=True)
    passport_no = Column(String, index=True)
    age = Column(Integer, index=True)
    scoot_id = Column(Integer)

    seat = relationship("Seat", back_populates="customer")


class Flight(Base):
    __tablename__ = "flights"

    id = Column(Integer, primary_key=True, index=True)
    flight_code = Column(String, index=True, unique=True)