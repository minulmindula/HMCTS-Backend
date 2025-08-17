import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Md_User } from "src/entities/master_data/md_user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Md_User,
    ])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }