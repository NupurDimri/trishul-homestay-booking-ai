from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Global Exception Handler
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"message": "Internal Server Error"}
    )


class Room(BaseModel):
    id: int
    name: str
    description: str
    image: str
    price: int
    rating: float


rooms = [
    {
        "id": 1,
        "name": "Mountain View Cottage",
        "description": "Cozy room with balcony view and essential amenities.",
        "image": "/images/cottageRoom.png",
        "price": 5500,
        "rating": 4.5
    },
    {
        "id": 2,
        "name": "Luxury Suite",
        "description": "Spacious room with mountain views and premium interiors.",
        "image": "/images/premiumSuite.jpg",
        "price": 6000,
        "rating": 4.8
    },
    {
        "id": 3,
        "name": "Family Suite",
        "description": "Large room ideal for families and groups.",
        "image": "/images/familyRoom.jpg",
        "price": 4500,
        "rating": 4.9
    },
    {
        "id": 4,
        "name": "Standard Room",
        "description": "Standard room ideal for one or two people.",
        "image": "/images/standardRoom.jpg",
        "price": 2000,
        "rating": 4.9
    },
    {
        "id": 5,
        "name": "Deluxe Room",
        "description": "Comfortable deluxe room with modern amenities.",
        "image": "/images/deluxeRoom.jpg",
        "price": 3000,
        "rating": 4.9
    },
    {
        "id": 7,
        "name": "Riverside Cottage",
        "description": "Relax beside the river with peaceful natural surroundings.",
        "image": "/images/riverSide.png",
        "price": 6999,
        "rating": 4.8
    }
]


# GET ALL ROOMS
@app.get("/api/rooms", status_code=200)
def get_rooms():
    return rooms

    return results


#search room#
# SEARCH ROOMS
@app.get("/api/rooms/search", status_code=200)
def search_rooms(q: str):

    results = []

    for room in rooms:
        if q.lower() in room["name"].lower():
            results.append(room)

    return results



# GET SINGLE ROOM
@app.get("/api/rooms/{room_id}", status_code=200)
def get_room(room_id: int):
    for room in rooms:
        if room["id"] == room_id:
            return room

    raise HTTPException(
        status_code=404,
        detail="Room not found"
    )


# CREATE ROOM
@app.post("/api/rooms", status_code=201)
def create_room(room: Room):

    for existing_room in rooms:
        if existing_room["id"] == room.id:
            raise HTTPException(
                status_code=400,
                detail="Room ID already exists"
            )

    rooms.append(room.dict())

    return {
        "message": "Room added successfully",
        "room": room
    }


# UPDATE ROOM
@app.put("/api/rooms/{room_id}", status_code=200)
def update_room(room_id: int, updated_room: Room):

    for index, room in enumerate(rooms):
        if room["id"] == room_id:
            rooms[index] = updated_room.dict()

            return {
                "message": "Room updated successfully",
                "room": updated_room
            }

    raise HTTPException(
        status_code=404,
        detail="Room not found"
    )


# DELETE ROOM
@app.delete("/api/rooms/{room_id}", status_code=204)
def delete_room(room_id: int):

    for room in rooms:
        if room["id"] == room_id:
            rooms.remove(room)
            return

    raise HTTPException(
        status_code=404,
        detail="Room not found"
    )


