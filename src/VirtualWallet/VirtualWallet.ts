import Cpf from './valueObjects/Cpf';

export default class VirtualWallet {
  cpf: Cpf;

  total: number;

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.total = 0;
  }

  getCpf(): string {
    return this.cpf.value;
  }

  getTotal(): number {
    const { total } = this;
    return total;
  }

  deposit(value: number): void {
    this.total += value;
  }

  withdraw(value: number): void {
    if (value > this.total) throw new Error('Insufficient funds');
    this.total -= value;
  }
}
