import ReturnWalletBalance from './ReturnWalletBalance';
import ReturnWalletBalanceRequestDTO from './ReturnWalletBalanceRequestDTO';
import VirtualWalletRepositoryMemory from '../VirtualWalletRepositoryMemory';

let returnWalletBalance: ReturnWalletBalance;

describe('Return wallet balance', () => {
  beforeEach(() => {
    const virtualWalletRepositoryMemory = new VirtualWalletRepositoryMemory();
    returnWalletBalance = new ReturnWalletBalance(virtualWalletRepositoryMemory);
  });

  it('Should return wallet balance', () => {
    const returnWalletBalanceRequestDTO = new ReturnWalletBalanceRequestDTO('259.692.740-38');
    const walletBalance = returnWalletBalance.execute(returnWalletBalanceRequestDTO);
    expect(walletBalance).toEqual({ total: 1000 });
  });

  it('Should not return wallet balance from a non-existent wallet', () => {
    const returnWalletBalanceRequestDTO = new ReturnWalletBalanceRequestDTO('404.163.310-92');
    expect(() => returnWalletBalance.execute(returnWalletBalanceRequestDTO)).toThrow(new Error('This wallet not exists'));
  });
});
