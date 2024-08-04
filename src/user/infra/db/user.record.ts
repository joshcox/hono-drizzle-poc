import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
  constructor(user?: User) {
    this.uuid = user?.uuid ?? uuidv4();
    this.name = user?.name ?? '';
  }

  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;
}
