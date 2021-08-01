import VirtualWallet from './VirtualWallet';
import VirtualWalletRepository from './VirtualWalletRepository';
import RegisterVirtualWalletRequestDTO from './RegisterVirtualWalletRequestDTO';

export default class RegisterVirtualWallet {
  virtualWalletRepository: VirtualWalletRepository;

  constructor(virtualWalletRepository: VirtualWalletRepository) {
    this.virtualWalletRepository = virtualWalletRepository;
  }

  execute(registerVirtualWalletRequest: RegisterVirtualWalletRequestDTO): void {
    const alreadyExists = this.virtualWalletRepository.findByCpf(registerVirtualWalletRequest.cpf);
    if (alreadyExists) throw new Error('Already exists a wallet vinculated with this cpf');
    const virtualWallet = new VirtualWallet(registerVirtualWalletRequest.cpf);
    this.virtualWalletRepository.save(virtualWallet);
  }
}
