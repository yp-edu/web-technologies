// src/users/usersService.ts
import { User } from "./user";

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "login" | "lastname" | "firstname"> & {
  password: string;
  confirmpassword: string;
};

export class UsersService {
  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      ...userCreationParams,
    };
  }

  public get(id: number): User {
    return {
      id,
      login: "jane@doe.com",
      lastname: "Jane Doe",
      firstname: "Happy",
    };
  }
}