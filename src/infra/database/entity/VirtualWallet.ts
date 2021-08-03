import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('virtual_wallets')
export default class VirtualWallet {
  @PrimaryColumn()
  id: number

  @Column()
  cpf: string

  @Column()
  total: number
}
