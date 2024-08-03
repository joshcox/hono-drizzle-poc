import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
