import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'CustomBaseEntity' })
export class CustomBaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'int', nullable: true })
  created_by: number;

  @Column({ type: 'datetime', nullable: true })
  modified_at: Date;

  @Column({ type: 'int', nullable: true })
  modified_by: number;

  @Column({ type: 'datetime', nullable: true })
  deleted_at: Date;

  @Column({ type: 'int', nullable: true })
  deleted_by: number;
}