import FinancialTransaction from '../FinancialTransaction';
import FinancialTransactionRepository from '../adapters/repository/FinancialTransactionRepository';
import PerformDepositRequestDTO from './PerformDepositRequestDTO';
import VirtualWalletRepository from '../../VirtualWallet/adapters/repository/VirtualWalletRepository';

export default class PerformDeposit {
  financialTransactionRepository: FinancialTransactionRepository;

  virtualWalletRepository: VirtualWalletRepository;

  constructor(
    financialTransactionRepository: FinancialTransactionRepository,
    virtualWalletRepository: VirtualWalletRepository,
  ) {
    this.financialTransactionRepository = financialTransactionRepository;
    this.virtualWalletRepository = virtualWalletRepository;
  }

  async execute(performDepositRequestDTO: PerformDepositRequestDTO): Promise<void> {
    const virtualWallet = await this.virtualWalletRepository.findByCpf(performDepositRequestDTO.cpf);
    virtualWallet.deposit(performDepositRequestDTO.value);
    this.virtualWalletRepository.updateVirtualWallet(virtualWallet.getCpf(), virtualWallet.getTotal());
    const financialTransaction = new FinancialTransaction(performDepositRequestDTO);
    this.financialTransactionRepository.save(financialTransaction);
  }
}
