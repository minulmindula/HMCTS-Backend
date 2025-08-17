import { Column, Entity } from "typeorm";
import { CustomBaseEntity } from "../base.entity";

@Entity({ name: "Md_UserRole" })
export class Md_UserRole extends CustomBaseEntity {

  @Column({ type: 'varchar', length: 20 })
  role_code: string;

  @Column({ type: 'varchar', length: 30 })
  role: string;

  @Column({ type: 'varchar', length: 500 })
  role_description: string;

  @Column({ type: 'int', nullable: true })
  priority_level: number;
}
