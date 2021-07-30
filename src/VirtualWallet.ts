export default class VirtualWallet {
  total: number;

  constructor() {
    this.total = 0;
  }

  deposit(value: number): void {
    this.total += value;
  }

  withDraw(value: number): void {
    if (value > this.total) throw new Error('Saldo indisponivel');
    this.total -= value;
  }

  getTotal(): number {
    const { total } = this;
    return total;
  }
}
