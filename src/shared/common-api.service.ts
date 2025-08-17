import { Injectable, Inject } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { environment } from "src/environments/environment";

@Injectable()
export class CommonApiService {
  constructor(
    private manager: EntityManager
  ) { }

  async getAll(repository: any, alias: string) {

    try {
      const repo = this.manager.getRepository(repository);
      let result = await repo.createQueryBuilder(alias)
        .where(`${alias}.is_active = :is_active`, { is_active: true })
        .getMany();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async getOne(repository: any, id: number, alias: string) {

    try {
      const repo = this.manager.getRepository(repository);
      let result = await repo.createQueryBuilder(alias)
        .where(`${alias}.id = :id`, { id })
        .andWhere(`${alias}.is_active = :is_active`, { is_active: true })
        .getMany();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(repository: any, id: number, deleted_by: number) {
    try {
      const repo = this.manager.getRepository(repository);
      const result = await repo.createQueryBuilder()
        .update(repository)
        .set({
          is_active: false,
          deleted_by: deleted_by,
          deleted_at: new Date()
        })
        .where('id = :id', { id: id })
        .execute();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

}