import { Column, Entity } from "typeorm";
import { CustomBaseEntity } from "../base.entity";

@Entity({ name: 'Ref_TaskStatus' })
export class Ref_TaskStatus extends CustomBaseEntity {
  
  @Column({ type: 'varchar', length: 50 })
  status_name: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  description?: string;

}