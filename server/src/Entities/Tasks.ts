import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Tasks extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  userid!: string;

  @Column()
  group!: string;

  @Column()
  date!: string;

  @Column()
  time!: string;

  @Column()
  project!: string;

  @Column()
  in_progress!: boolean;

  @Column()
  completed!: boolean;

  @Column()
  notes!: string;
}