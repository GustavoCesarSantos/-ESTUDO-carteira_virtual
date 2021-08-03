import RegisterVirtualWallet from './RegisterVirtualWallet';
import RegisterVirtualWalletRequestDTO from './RegisterVirtualWalletRequestDTO';
import VirtualWalletRepositoryMemory from '../adapters/repository/VirtualWalletRepositoryMemory';

let registerVirtualWallet: RegisterVirtualWallet;

describe.only('Register wallet test', () => {
  beforeEach(() => {
    const virtualWalletRepositoryMemory = new VirtualWalletRepositoryMemory();
    registerVirtualWallet = new RegisterVirtualWallet(virtualWalletRepositoryMemory);
  });

  it('Should register a wallet', async () => {
    const registerVirtualWalletRequest = new RegisterVirtualWalletRequestDTO('090.112.550-46');
    expect(() => registerVirtualWallet.execute(registerVirtualWalletRequest)).not.toThrow();
  });

  it('Should not register a duplicated wallet', async () => {
    const registerVirtualWalletRequest = new RegisterVirtualWalletRequestDTO('259.692.740-38');
    registerVirtualWallet.execute(registerVirtualWalletRequest);
    await expect(() => registerVirtualWallet.execute(registerVirtualWalletRequest)).rejects.toThrow(new Error('Already exists a wallet vinculated with this cpf'));
  });
});
