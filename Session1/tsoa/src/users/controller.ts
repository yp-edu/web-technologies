import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { User } from "./user";
import { UsersService, UserCreationParams } from "./service";

@Route("api/user")
export class UsersController extends Controller {
  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    new UsersService().create(requestBody);
    return;
  }

  @Get("{userId}")
  public async getUser(
    @Path() userId: number,
  ): Promise<User> {
    return new UsersService().get(userId);
  }
}