import FilterTransactionsFromPeriodRequestDTO from './FilterTransactionsFromPeriodRequestDTO';
import VirtualWalletRepository from './VirtualWalletRepository';

export default class FilterTransactionsFromPeriod {
  virtualWalletRepository: VirtualWalletRepository;

  constructor(
    virtualWalletRepository: VirtualWalletRepository,
  ) {
    this.virtualWalletRepository = virtualWalletRepository;
  }

  execute(filterTransactionsFromPeriodRequestDTO: FilterTransactionsFromPeriodRequestDTO) {
    const virtualWallet = this.virtualWalletRepository.findByCpf(filterTransactionsFromPeriodRequestDTO.cpf);
    if (!virtualWallet) throw new Error('This wallet not exists');
    const transactions = this.virtualWalletRepository.filterTransactions(
      filterTransactionsFromPeriodRequestDTO.cpf,
      filterTransactionsFromPeriodRequestDTO.startDate,
      filterTransactionsFromPeriodRequestDTO.endDate,
    );
    return transactions;
  }
}
