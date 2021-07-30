import FinancialMovement from './FinancialMovement';
import VirtualWallet from './VirtualWallet';

describe('Financial movement test', () => {
  it('Should must make a withdrawal', () => {
    const virtualWallet = new VirtualWallet();
    virtualWallet.deposit(1000);
    const financialMovement = new FinancialMovement('Pagamento', 'Conta de agua');
    const output = financialMovement.withDraw(virtualWallet, 100);
    expect(output).toEqual({
      category: 'Pagamento',
      observation: 'Conta de agua',
      value: 100,
    });
  });
});
