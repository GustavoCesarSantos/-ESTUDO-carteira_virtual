import VirtualWallet from './VirtualWallet';

describe('Virtual wallet test', () => {
  it('Should not create a wallet when passed a invalid cpf', () => {
    expect(() => new VirtualWallet('000.000.000-00')).toThrow(new Error('Invalid cpf.'));
  });

  it('Should not make a withdraw', () => {
    const wallet = new VirtualWallet('090.112.550-46');
    wallet.deposit(50);
    expect(() => wallet.withdraw(51)).toThrow(new Error('Insufficient funds'));
  });

  it('Should create a wallet', () => {
    const wallet = new VirtualWallet('090.112.550-46');
    expect(wallet.getCpf()).toBe('090.112.550-46');
  });

  it('Should make a deposit', () => {
    const wallet = new VirtualWallet('090.112.550-46');
    wallet.deposit(1000);
    expect(wallet.getTotal()).toBe(1000);
  });

  it('Should make a withdraw', () => {
    const wallet = new VirtualWallet('090.112.550-46');
    wallet.deposit(1000);
    wallet.withdraw(100);
    expect(wallet.getTotal()).toBe(900);
  });
});
