import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";


@ApiTags('Users')
@Controller('Users')
export class UserController { 
  constructor(private readonly userService: UserService) {}

  @Get('/GetAll')
  async findAll() {
    return this.userService.findAll();
  }
}