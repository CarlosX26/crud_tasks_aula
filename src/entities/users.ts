import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id!: number

  @Column({
    length: 64,
  })
  name!: string

  @Column({
    length: 200,
    unique: true,
  })
  email!: string

  @Column({
    type: "int",
    nullable: true,
  })
  age!: number

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}

 @Entity("tasks")
 export class tasks {
  @PrimaryGeneratedColumn ("increment")
  id!: number;

  @Column({
    length: 100,
  })
  titulo!: string;

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
 }
