import { Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { UserRegisterDto } from "./dto/user_register.dto";
import { Md_User } from "src/entities/master_data/md_user.entity";
import { UserLoginDto } from "./dto/user_login.dto";


@Injectable()
export class AuthenticationService {
  respositoryName = Md_User;
  repository;

  constructor(
    private manager: EntityManager
  ) {
    this.repository = this.manager.getRepository(this.respositoryName);
  }

  async register(dto: UserRegisterDto) {
    try {
      const result = this.repository.create(dto);
      await this.repository.save(result);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async login(dto: UserLoginDto) {
    try {
      const user = await this.repository.findOne({
        where: { email_address: dto.email_address, password: dto.password }
      });
      if (!user) {
        throw new Error('Invalid credentials');
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

}