import FinancialTransaction from '../FinancialTransaction';
import FinancialTransactionRepository from '../FinancialTransactionRepository';
import PerformWithdrawalRequestDTO from './PerformWithdrawalRequestDTO';
import VirtualWalletRepository from '../../VirtualWallet/VirtualWalletRepository';

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

  execute(performWithdrawalRequestDTO: PerformWithdrawalRequestDTO): void {
    const virtualWallet = this.virtualWalletRepository.findByCpf(performWithdrawalRequestDTO.cpf);
    if (!virtualWallet) throw new Error('This wallet not exists');
    virtualWallet?.withdraw(performWithdrawalRequestDTO.value);
    virtualWallet?.setTransaction(performWithdrawalRequestDTO);
    this.virtualWalletRepository.updateVirtualWallet(virtualWallet.getCpf(), virtualWallet.getTotal(), virtualWallet.getTransactions());
    const financialTransaction = new FinancialTransaction(performWithdrawalRequestDTO);
    this.financialTransactionRepository.save(financialTransaction);
  }
}
