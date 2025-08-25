import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"

@Entity("tasks")
export class Task {
  @PrimaryGeneratedColumn("increment")
  id!: number

  @Column({
    type: "text",
  })
  desc!: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
