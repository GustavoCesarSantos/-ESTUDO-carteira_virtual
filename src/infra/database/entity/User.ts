import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export default class User {
  @PrimaryColumn()
  id: number

  @Column()
  email: string

  @Column()
  password: string
}
