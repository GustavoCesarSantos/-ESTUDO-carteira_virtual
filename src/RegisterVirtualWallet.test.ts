import RegisterVirtualWallet from './RegisterVirtualWallet';
import RegisterVirtualWalletRequestDTO from './RegisterVirtualWalletRequestDTO';
import VirtualWalletRepositoryMemory from './VirtualWalletRepositoryMemory';

let registerVirtualWallet: RegisterVirtualWallet;

describe('Register wallet test', () => {
  beforeEach(() => {
    const virtualWalletRepositoryMemory = new VirtualWalletRepositoryMemory();
    registerVirtualWallet = new RegisterVirtualWallet(virtualWalletRepositoryMemory);
  });

  it('Should register a wallet', () => {
    const registerVirtualWalletRequest = new RegisterVirtualWalletRequestDTO('090.112.550-46');
    expect(() => registerVirtualWallet.execute(registerVirtualWalletRequest)).not.toThrow();
  });

  it('Should not register a duplicated wallet', () => {
    const registerVirtualWalletRequest = new RegisterVirtualWalletRequestDTO('090.112.550-46');
    registerVirtualWallet.execute(registerVirtualWalletRequest);
    expect(() => registerVirtualWallet.execute(registerVirtualWalletRequest)).toThrow(new Error('Already exists a wallet vinculated with this cpf'));
  });
});
