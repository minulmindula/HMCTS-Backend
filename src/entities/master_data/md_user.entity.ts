import { Column, Entity } from "typeorm";
import { CustomBaseEntity } from "../base.entity";


@Entity({ name: 'Md_User' })
export class Md_User extends CustomBaseEntity {

  @Column({ type: 'varchar', length: 50 })
  first_name: string;

  @Column({ type: 'varchar', length: 100 })
  last_name: string;

  @Column({ type: 'varchar', length: 500 })
  email_address: string;

  @Column({ type: 'varchar', length: 25 })
  mobile_number: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'int' })
  user_role_id: number;
}