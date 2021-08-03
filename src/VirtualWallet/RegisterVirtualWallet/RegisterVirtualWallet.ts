import VirtualWallet from '../VirtualWallet';
import VirtualWalletRepository from '../adapters/repository/VirtualWalletRepository';
import RegisterVirtualWalletRequestDTO from './RegisterVirtualWalletRequestDTO';

export default class RegisterVirtualWallet {
  virtualWalletRepository: VirtualWalletRepository;

  constructor(virtualWalletRepository: VirtualWalletRepository) {
    this.virtualWalletRepository = virtualWalletRepository;
  }

  async execute(registerVirtualWalletRequest: RegisterVirtualWalletRequestDTO): Promise<void> {
    await this.virtualWalletRepository.findWallet(registerVirtualWalletRequest.cpf);
    const virtualWallet = new VirtualWallet(registerVirtualWalletRequest.cpf);
    this.virtualWalletRepository.save(virtualWallet);
  }
}
