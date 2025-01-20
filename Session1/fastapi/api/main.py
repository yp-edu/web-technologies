from fastapi import FastAPI
from fastapi.responses import JSONResponse

from api.schema import CreateUserRequest, GetUserResponse, CreateUserResponse

app = FastAPI()

users = {}
next_id = 1

@app.post("/api/user", response_model=CreateUserResponse)
def create_user(userRequest: CreateUserRequest):
    if userRequest.login in [user.login for user in users.values()]:
        return JSONResponse(status_code=400, content={"message": "User already exists"})
    users[next_id] = {"id": next_id, "login": userRequest.login, "lastname": userRequest.lastname, "firstname": userRequest.firstname}
    next_id += 1
    return JSONResponse(status_code=201, content=CreateUserResponse(id=next_id - 1))


@app.get("/api/user/{user_id}", response_model=GetUserResponse)
def get_user(user_id: int):
    if user_id not in users:
        return JSONResponse(status_code=404, content={"message": "User not found"})
    return JSONResponse(status_code=200, content=GetUserResponse(id=users[user_id]["id"], login=users[user_id]["login"], lastname=users[user_id]["lastname"], firstname=users[user_id]["firstname"]))
