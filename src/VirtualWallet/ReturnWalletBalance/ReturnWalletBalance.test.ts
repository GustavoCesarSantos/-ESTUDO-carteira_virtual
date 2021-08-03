import ReturnWalletBalance from './ReturnWalletBalance';
import ReturnWalletBalanceRequestDTO from './ReturnWalletBalanceRequestDTO';
import VirtualWalletRepositoryMemory from '../adapters/repository/VirtualWalletRepositoryMemory';

let returnWalletBalance: ReturnWalletBalance;

describe('Return wallet balance', () => {
  beforeEach(() => {
    const virtualWalletRepositoryMemory = new VirtualWalletRepositoryMemory();
    returnWalletBalance = new ReturnWalletBalance(virtualWalletRepositoryMemory);
  });

  it('Should return wallet balance', async () => {
    const returnWalletBalanceRequestDTO = new ReturnWalletBalanceRequestDTO('259.692.740-38');
    const walletBalance = returnWalletBalance.execute(returnWalletBalanceRequestDTO);
    await expect(walletBalance).resolves.toEqual({ total: 1000 });
  });

  it('Should not return wallet balance from a non-existent wallet', async () => {
    const returnWalletBalanceRequestDTO = new ReturnWalletBalanceRequestDTO('404.163.310-92');
    await expect(() => returnWalletBalance.execute(returnWalletBalanceRequestDTO)).rejects.toThrow(new Error('This wallet not exists'));
  });
});
