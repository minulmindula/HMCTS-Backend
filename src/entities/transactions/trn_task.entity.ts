import { Column, Entity } from "typeorm";
import { CustomBaseEntity } from "../base.entity";

@Entity({name: 'Trn_Task'})
export class Trn_Task extends CustomBaseEntity {
  
  @Column({ type: 'varchar', length: 100 })
  task_name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  status_id: string;

  @Column({ type: 'int' })
  assigned_to_user_id: number;

  @Column({ type: 'date' })
  due_date: Date;

  @Column({ type: 'boolean', default: false })
  is_completed: boolean;
}