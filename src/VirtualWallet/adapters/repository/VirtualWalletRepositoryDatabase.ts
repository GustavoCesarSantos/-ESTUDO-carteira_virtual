import { getCustomRepository } from 'typeorm';
import VirtualWalletRepositoryPostgres from '../../../infra/database/repository/VirtualWalletRepositoryPostgres';
import VirtualWallet from '../../VirtualWallet';
import VirtualWalletRepository from './VirtualWalletRepository';

export default class VirtualWalletRepositoryDatabase implements VirtualWalletRepository {
  virtualWalletRepository: VirtualWalletRepositoryPostgres;

  constructor() {
    this.virtualWalletRepository = getCustomRepository(VirtualWalletRepositoryPostgres);
  }

  async save(virtualWallet: VirtualWallet): Promise<void> {
    const virtualWalletDB = { cpf: virtualWallet.getCpf(), total: virtualWallet.getTotal() };
    await this.virtualWalletRepository.createAndSave(virtualWalletDB);
  }

  async findWallet(cpf: string): Promise<void> {
    const virtualWalletDB = await this.virtualWalletRepository.findWallet(cpf);
    if (virtualWalletDB) throw new Error('Already exists a wallet vinculated with this cpf');
  }

  async findByCpf(cpf: string): Promise<VirtualWallet> {
    const virtualWalletDB = await this.virtualWalletRepository.findByCpf(cpf);
    if (!virtualWalletDB) throw new Error('This wallet not exists');
    const virtualWallet = new VirtualWallet(virtualWalletDB.cpf);
    virtualWallet.deposit(virtualWalletDB.total);
    return virtualWallet;
  }

  async updateVirtualWallet(
    cpf: string,
    total: number,
  ): Promise<void> {
    this.virtualWalletRepository.updateWallet(cpf, { total });
  }
}
