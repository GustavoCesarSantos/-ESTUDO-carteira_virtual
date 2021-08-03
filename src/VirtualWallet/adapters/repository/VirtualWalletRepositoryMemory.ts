import VirtualWallet from '../../VirtualWallet';
import VirtualWalletRepository from './VirtualWalletRepository';

const virtualWalletMock1 = new VirtualWallet('259.692.740-38');
virtualWalletMock1.deposit(1000);

export default class VirtualWalletRepositoryMemory implements VirtualWalletRepository {
  virtualWallets: VirtualWallet[];

  constructor() {
    this.virtualWallets = [
      virtualWalletMock1,
    ];
  }

  save(virutalWallet: VirtualWallet) {
    this.virtualWallets.push(virutalWallet);
  }

  findWallet(cpf: string) {
    const virtualWallet = this.virtualWallets.find((wallet) => wallet.getCpf() === cpf);
    if (virtualWallet) throw new Error('Already exists a wallet vinculated with this cpf');
  }

  findByCpf(cpf: string) {
    const virtualWallet = this.virtualWallets.find((wallet) => wallet.getCpf() === cpf);
    if (!virtualWallet) throw new Error('This wallet not exists');
    return Promise.resolve(virtualWallet);
  }

  updateVirtualWallet(cpf: string, total: number) {
    this.virtualWallets[0].total = total;
  }
}
