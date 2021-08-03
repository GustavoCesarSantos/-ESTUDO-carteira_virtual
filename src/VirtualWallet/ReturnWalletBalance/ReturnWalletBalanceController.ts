import VirtualWalletRepositoryDatabase from '../adapters/repository/VirtualWalletRepositoryDatabase';
import ReturnWalletBalance from './ReturnWalletBalance';
import ReturnWalletBalanceRequestDTO from './ReturnWalletBalanceRequestDTO';
import ReturnWalletBalanceResponseDTO from './ReturnWalletBalanceResponseDTO';

export default class ReturnWalletBalanceController {
  virtualWalletRepository: VirtualWalletRepositoryDatabase;

  constructor() {
    this.virtualWalletRepository = new VirtualWalletRepositoryDatabase();
  }

  async returnWalletBalance(cpf: string): Promise<ReturnWalletBalanceResponseDTO> {
    const returnWalletBalance = new ReturnWalletBalance(this.virtualWalletRepository);
    const returnWalletBalanceRequestDTO = new ReturnWalletBalanceRequestDTO(cpf);
    return returnWalletBalance.execute(returnWalletBalanceRequestDTO);
  }
}
