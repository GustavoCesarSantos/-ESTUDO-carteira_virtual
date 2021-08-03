import { EntityRepository, Repository } from 'typeorm';
import VirtualWallet from '../entity/VirtualWallet';

@EntityRepository(VirtualWallet)
export default class VirtualWalletRepositoryPostgres extends Repository<VirtualWallet> {
  findWallet(cpf: string) {
    return this.findOne({ where: { cpf } });
  }

  findByCpf(cpf: string) {
    return this.findOne({ where: { cpf } });
  }

  createAndSave(param: any) {
    const paramDB = this.create(param);
    this.save(paramDB);
  }

  updateWallet(cpf: any, value: any) {
    this.update({ cpf }, value);
  }
}
