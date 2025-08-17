import { Module } from "@nestjs/common";
import { Md_User } from "./master_data/md_user.entity";
import { Md_UserRole } from "./master_data/md_user_role.entity";
import { Trn_Task } from "./transactions/trn_task.entity";
import { Ref_TaskStatus } from "./references/ref_task_status.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Md_User,
      Md_UserRole,

      Trn_Task,

      Ref_TaskStatus
    ])
  ],
  controllers: [],
  providers: [],
})
export class EntityModule { }