import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('transactions')
export default class Transaction {
  @PrimaryColumn()
  id: number

  @Column()
  date: Date;

  @Column()
  wallet_identification: string;

  @Column()
  category: string;

  @Column()
  observation: string;

  @Column()
  value: number;
}
