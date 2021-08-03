import VirtualWalletRepositoryDatabase from '../adapters/repository/VirtualWalletRepositoryDatabase';
import RegisterVirtualWallet from './RegisterVirtualWallet';
import RegisterVirtualWalletRequestDTO from './RegisterVirtualWalletRequestDTO';

export default class RegisterVirtualWallerController {
  virtualWalletRepository: VirtualWalletRepositoryDatabase;

  constructor() {
    this.virtualWalletRepository = new VirtualWalletRepositoryDatabase();
  }

  async registerVirtualWallet(cpf: string): Promise<void> {
    const registerVirtualWallet = new RegisterVirtualWallet(this.virtualWalletRepository);
    const registerVirtualWalletDTO = new RegisterVirtualWalletRequestDTO(cpf);
    await registerVirtualWallet.execute(registerVirtualWalletDTO);
  }
}
