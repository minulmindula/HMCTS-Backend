import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";


export class UserRegisterDto {

  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'First name must have atleast 2 characters.' })
  @IsNotEmpty()
  first_name: string;

  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'Last name must have atleast 2 characters.' })
  @IsNotEmpty()
  last_name: string;

  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'Email address must have atleast 2 characters.' })
  @IsNotEmpty()
  email_address: string;

  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'Mobile number must have atleast 2 characters.' })
  @IsNotEmpty()
  mobile_number: string;

  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'Password must have atleast 2 characters.' })
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  user_role_id: number;


}