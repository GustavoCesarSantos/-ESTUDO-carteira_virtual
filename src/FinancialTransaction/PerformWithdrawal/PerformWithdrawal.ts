import FinancialTransaction from '../FinancialTransaction';
import FinancialTransactionRepository from '../adapters/repository/FinancialTransactionRepository';
import PerformWithdrawalRequestDTO from './PerformWithdrawalRequestDTO';
import VirtualWalletRepository from '../../VirtualWallet/adapters/repository/VirtualWalletRepository';

export default class PerformWithdrawal {
  financialTransactionRepository: FinancialTransactionRepository;

  virtualWalletRepository: VirtualWalletRepository;

  constructor(
    financialTransactionRepository: FinancialTransactionRepository,
    virtualWalletRepository: VirtualWalletRepository,
  ) {
    this.financialTransactionRepository = financialTransactionRepository;
    this.virtualWalletRepository = virtualWalletRepository;
  }

  async execute(performWithdrawalRequestDTO: PerformWithdrawalRequestDTO): Promise<void> {
    const virtualWallet = await this.virtualWalletRepository.findByCpf(performWithdrawalRequestDTO.cpf);
    virtualWallet.withdraw(performWithdrawalRequestDTO.value);
    this.virtualWalletRepository.updateVirtualWallet(virtualWallet.getCpf(), virtualWallet.getTotal());
    const financialTransaction = new FinancialTransaction(performWithdrawalRequestDTO);
    this.financialTransactionRepository.save(financialTransaction);
  }
}
