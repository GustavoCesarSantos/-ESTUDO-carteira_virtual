import FinancialTransactionRepositoryMemory from '../FinancialTransactionRepositoryMemory';
import PerformDeposit from './PerformDeposit';
import PerformDepositRequestDTO from './PerformDepositRequestDTO';
import VirtualWalletRepositoryMemory from '../../VirtualWallet/VirtualWalletRepositoryMemory';

let performDeposit: PerformDeposit;

describe('Performe deposit test', () => {
  beforeEach(() => {
    const financialTransactionRepositoryMemory = new FinancialTransactionRepositoryMemory();
    const virtualWalletRepositoryMemory = new VirtualWalletRepositoryMemory();
    performDeposit = new PerformDeposit(financialTransactionRepositoryMemory, virtualWalletRepositoryMemory);
  });

  it('Should make a deposit', () => {
    const performDepositRequestDTO = new PerformDepositRequestDTO(
      new Date(),
      '259.692.740-38',
      'Recarga de celular',
      'Crêditos do mês de Maio',
      50,
    );
    expect(() => performDeposit.execute(performDepositRequestDTO)).not.toThrow();
  });

  it('Should not depoist from a non-existent wallet', () => {
    const performDepositRequestDTO = new PerformDepositRequestDTO(
      new Date(),
      '404.163.310-92',
      'Recarga de celular',
      'Crêditos do mês de Maio',
      50,
    );
    expect(() => performDeposit.execute(performDepositRequestDTO)).toThrow(new Error('This wallet not exists'));
  });
});
