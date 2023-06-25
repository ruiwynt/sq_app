from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/flights/", response_model=schemas.Flight)
def create_flight(flight: schemas.FlightBase, db: Session = Depends(get_db)):
    new_flight = crud.get_flight_by_code(db, flight_code=flight.flight_code)
    if new_flight:
        raise HTTPException(status_code=400, detail="Flight already registered")
    return crud.create_flight(db, flight)


@app.get("/flights/{flight_id}", response_model=schemas.Flight)
def read_flight(flight_id: int, db: Session = Depends(get_db)):
    flight = crud.get_flight(db, flight_id)
    if flight is None:
        raise HTTPException(status_code=404, detail="Flight not found")
    return flight


@app.post("/itemtypes/", response_model=schemas.ItemType)
def create_item_type(item_type: schemas.ItemTypeBase, db: Session = Depends(get_db)):
    item_type_check = crud.get_item_type_by_name(db, item_type.name)
    if item_type_check:
        raise HTTPException(status_code=400, detail=f"Item type {item_type_check.name} already exists with id {item_type_check.id}")
    return crud.create_item_type(db, item_type)


@app.get("/itemtypes/{item_type_id}", response_model=schemas.ItemType)
def get_item_type(item_type_id: int, db: Session = Depends(get_db)):
    return crud.get_item_type(db, item_type_id)


@app.get("/itemtypes/", response_model=list[schemas.ItemType])
def get_item_Types(db: Session = Depends(get_db)):
    return crud.get_item_types(db)

@app.post("/items/", response_model=schemas.Item)
def create_item(item: schemas.ItemBase, db: Session = Depends(get_db)):
    item = crud.get_item(db, item.name)
    if item:
        raise HTTPException(status_code=400, detail=f"Item type {item_.name} already exists with id {item_.id}")
    return crud.create_item(db, item)


@app.get("/items/{item_id}", response_model=schemas.Item)
def get_item(item_id: int, db: Session = Depends(get_db)):
    return crud.get_item(db, item_id)


@app.post("/items/{item_id}/discount", response_model=schemas.Item)
def apply_discount(item_id: int, discount_percent: float, db: Session = Depends(get_db)):
    item = crud.get_item(db, item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Flight not found")
    item.discount_percent = discount_percent
    return item
