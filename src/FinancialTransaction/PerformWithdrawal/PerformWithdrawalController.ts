import VirtualWalletRepositoryDatabase from '../../VirtualWallet/adapters/repository/VirtualWalletRepositoryDatabase';
import FinancialTransactionRepositoryDatabase from '../adapters/repository/FinancialTransactionRepositoryDatabase';
import PerformWithdrawal from './PerformWithdrawal';
import PerformWithdrawalRequestDTO from './PerformWithdrawalRequestDTO';

export default class PerformWithdrawalController {
  financialTransactionRepository: FinancialTransactionRepositoryDatabase;

  virtualWalletRepository: VirtualWalletRepositoryDatabase;

  constructor() {
    this.financialTransactionRepository = new FinancialTransactionRepositoryDatabase();
    this.virtualWalletRepository = new VirtualWalletRepositoryDatabase();
  }

  async performWithdrawal(body: any): Promise<void> {
    const performWithdrawal = new PerformWithdrawal(
      this.financialTransactionRepository,
      this.virtualWalletRepository,
    );
    const performWithdrawalRequestDTO = new PerformWithdrawalRequestDTO(body);
    await performWithdrawal.execute(performWithdrawalRequestDTO);
  }
}
