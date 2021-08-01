import Transaction from './Transaction';
import VirtualWallet from './VirtualWallet';
import VirtualWalletRepository from './VirtualWalletRepository';

const virtualWalletMock1 = new VirtualWallet('259.692.740-38');
virtualWalletMock1.deposit(1000);

const virtualWalletMock2 = new VirtualWallet('377.950.170-88');
virtualWalletMock2.setTransaction(
  {
    date: new Date('1995-12-17T03:24:00'),
    cpf: '377.950.170-88',
    category: 'Pagamento de conta',
    observation: 'Conta de Luz de Outubro',
    value: 100,
  },
);
virtualWalletMock2.setTransaction(
  {
    date: new Date('1995-12-21T12:24:00'),
    cpf: '377.950.170-88',
    category: 'Pagamento de conta',
    observation: 'Conta de Luz de Novembro',
    value: 100,
  },
);

export default class VirtualWalletRepositoryMemory implements VirtualWalletRepository {
  virtualWallets: VirtualWallet[];

  constructor() {
    this.virtualWallets = [
      virtualWalletMock1,
      virtualWalletMock2,
    ];
  }

  save(virutalWallet: VirtualWallet): void {
    this.virtualWallets.push(virutalWallet);
  }

  findByCpf(cpf: string) {
    return this.virtualWallets.find((wallet) => wallet.getCpf() === cpf);
  }

  updateVirtualWallet(cpf: string, total: number, transactions: Transaction[]): void {
    this.virtualWallets[0].total = total;
    this.virtualWallets[0].transactions = transactions;
  }

  filterTransactions(cpf: string, startDate: Date, endDate: Date): Transaction[] | undefined {
    const transactions = this.virtualWallets.find((wallet) => wallet.getCpf() === cpf);
    const historico = transactions?.getTransactions().filter((transaction: Transaction) => transaction.date >= startDate && transaction.date <= endDate);
    return historico;
  }
}
