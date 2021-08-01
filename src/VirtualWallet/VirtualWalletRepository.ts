import Transaction from '../Value objects/Transaction';
import VirtualWallet from './VirtualWallet';

export default interface VirtualWalletRepository {
  save(virutalWallet: VirtualWallet): void;
  findByCpf(cpf: string): VirtualWallet | undefined;
  updateVirtualWallet(cpf: string, total: number, transactions: Transaction[]): void;
  filterTransactions(cpf: string, startDate: Date, endDate:Date): Transaction[] | undefined;
}
