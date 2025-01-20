from pydantic import BaseModel, model_validator


class CreateUserRequest(BaseModel):
    login: str
    password: str
    confirmpassword: str
    lastname: str
    firstname: str

    @model_validator(mode='after')
    def check_passwords_match(self):
        if self.password != self.confirmpassword:
            raise ValueError('Passwords do not match')
        return self

class CreateUserResponse(BaseModel):
    id: int

class GetUserResponse(BaseModel):
    id: int
    login: str
    lastname: str
    firstname: str
