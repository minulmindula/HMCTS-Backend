import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthenticationService } from "./authentication.service";
import { UserRegisterDto } from "./dto/user_register.dto";
import { UserLoginDto } from "./dto/user_login.dto";

@ApiTags('Authentication')
@Controller('Authentication')
export class AuthenticationController {

  constructor(private readonly authService: AuthenticationService) { }

  // #region Register
  @Post('/Register')
  register(@Body() registerDto: UserRegisterDto) {
    return this.authService.register(registerDto);
  }
  // #endregion


  // #region Login
  @Post('/Login')
  login(@Body() loginDto: UserLoginDto) {
    return this.authService.login(loginDto);
  }
  // #endregion
}