import Cpf from './Cpf';
import Transaction from './Transaction';

export default class VirtualWallet {
  cpf: Cpf;

  total: number;

  transactions: Transaction[];

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.total = 0;
    this.transactions = [];
  }

  getCpf(): string {
    return this.cpf.value;
  }

  getTotal(): number {
    const { total } = this;
    return total;
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  setTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  deposit(value: number): void {
    this.total += value;
  }

  withdraw(value: number): void {
    if (value > this.total) throw new Error('Insufficient funds');
    this.total -= value;
  }
}
