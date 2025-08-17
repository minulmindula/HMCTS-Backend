import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class UserLoginDto {
  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'UID must have atleast 2 characters.' })
  @IsNotEmpty()
  uid: string;

  @ApiProperty()
  @IsString()
  first_name: string;

  @ApiProperty()
  @IsString()
  last_name: string;

  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  email_address: string;

  @ApiProperty()
  mobile_number: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNumber()
  user_role_id: number;

  @ApiProperty()
  @IsBoolean()
  is_authenticated: boolean;
}