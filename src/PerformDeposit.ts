import FinancialTransaction from './FinancialTransaction';
import FinancialTransactionRepository from './FinancialTransactionRepository';
import PerformDepositRequestDTO from './PerformDepositRequestDTO';
import VirtualWalletRepository from './VirtualWalletRepository';

export default class PerformeDeposit {
  financialTransactionRepository: FinancialTransactionRepository;

  virtualWalletRepository: VirtualWalletRepository;

  constructor(
    financialTransactionRepository: FinancialTransactionRepository,
    virtualWalletRepository: VirtualWalletRepository,
  ) {
    this.financialTransactionRepository = financialTransactionRepository;
    this.virtualWalletRepository = virtualWalletRepository;
  }

  execute(performDepositRequestDTO: PerformDepositRequestDTO) {
    const virtualWallet = this.virtualWalletRepository.findByCpf(performDepositRequestDTO.cpf);
    if (!virtualWallet) throw new Error('This wallet not exists');
    virtualWallet?.deposit(performDepositRequestDTO.value);
    virtualWallet?.setTransaction(performDepositRequestDTO);
    this.virtualWalletRepository.updateVirtualWallet(virtualWallet.getCpf(), virtualWallet.getTotal(), virtualWallet.getTransactions());
    const financialTransaction = new FinancialTransaction(performDepositRequestDTO);
    this.financialTransactionRepository.save(financialTransaction);
  }
}
