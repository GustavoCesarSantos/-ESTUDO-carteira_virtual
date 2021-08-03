import VirtualWalletRepositoryDatabase from '../../VirtualWallet/adapters/repository/VirtualWalletRepositoryDatabase';
import FinancialTransactionRepositoryDatabase from '../adapters/repository/FinancialTransactionRepositoryDatabase';
import PerformDeposit from './PerformDeposit';
import PerformDepositRequestDTO from './PerformDepositRequestDTO';

export default class PerformDepositController {
  financialTransactionRepository: FinancialTransactionRepositoryDatabase;

  virtualWalletRepository: VirtualWalletRepositoryDatabase;

  constructor() {
    this.financialTransactionRepository = new FinancialTransactionRepositoryDatabase();
    this.virtualWalletRepository = new VirtualWalletRepositoryDatabase();
  }

  async performDeposit(body: any): Promise<void> {
    const performDeposit = new PerformDeposit(
      this.financialTransactionRepository,
      this.virtualWalletRepository,
    );
    const performDepositRequestDTO = new PerformDepositRequestDTO(body);
    await performDeposit.execute(performDepositRequestDTO);
  }
}
