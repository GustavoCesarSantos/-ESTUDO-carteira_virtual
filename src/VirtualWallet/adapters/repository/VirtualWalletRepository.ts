/* eslint-disable no-unused-vars */
import VirtualWallet from '../../VirtualWallet';

export default interface VirtualWalletRepository {
  save(virutalWallet: VirtualWallet): void;
  findWallet(cpf: string): void;
  findByCpf(cpf: string): Promise<VirtualWallet>;
  updateVirtualWallet(cpf: string, total: number): void;
};
