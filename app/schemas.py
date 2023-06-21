from typing import Union
from datetime import datetime

from pydantic import BaseModel
from .models import TaskStatus, CabinType, SeatType, TaskPriority, ItemCategory


class TaskBase(BaseModel):
    item_id: Union[int, None]
    description: str
    priority: TaskPriority = TaskPriority.high


class Task(TaskBase):
    id: int
    status: TaskStatus = TaskStatus.not_started
    time_completed: Union[datetime, None]
    time_added: datetime

    class Config:
        orm_mode = True


class ItemTypeBase(BaseModel):
    name: str
    category: ItemCategory
    description: str


class ItemType(ItemTypeBase):
    id: int
    image: bytes = b'0'

    class Config:
        orm_mode = True


class ItemBase(BaseModel):
    item_type_id: int
    expiry_date: datetime
    price: float


class Item(ItemBase):
    id: int
    item_type: ItemType 
    discount_percent: float = 0.0
    time_added: datetime
    tasks: list[Task] = []

    class Config:
        orm_mode = True


class SeatBase(BaseModel):
    customer_id: int
    code: str
    cabin: CabinType
    type: SeatType


class Seat(SeatBase):
    id: int

    class Config:
        orm_mode = True


class CustomerBase(BaseModel):
    given_name: str
    surname: str
    passport_no: str
    age: int
    scoot_id: Union[int, None]


class Customer(CustomerBase):
    id: int

    class Config:
        orm_mode = True


class FlightBase(BaseModel):
    flight_code: str


class Flight(FlightBase):
    id: int

    class Config:
        orm_mode = True