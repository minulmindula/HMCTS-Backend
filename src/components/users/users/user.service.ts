import { Injectable } from "@nestjs/common";
import { Md_User } from "src/entities/master_data/md_user.entity";
import { EntityManager } from "typeorm";

@Injectable()
export class UserService {
  repositoryName = Md_User;
  repository;
  alias = 'user';

  constructor(
    private manager: EntityManager
  ) {
    this.repository = this.manager.getRepository(this.repositoryName);
  }

  async findAll() {
    try {
      const result = this.repository.createQueryBuilder(this.alias)
        .getMany();
        return result;
    } catch (error) {
      throw error;
    }
  }

}