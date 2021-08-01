import FinancialTransactionRepositoryMemory from './FinancialTransactionRepositoryMemory';
import PerformWithdrawal from './PerformWithdrawal';
import PerformWithdrawalRequestDTO from './PerformWithdrawalRequestDTO';
import VirtualWalletRepositoryMemory from './VirtualWalletRepositoryMemory';

let performWithdrawal: PerformWithdrawal;

describe('Perform withdrawal test', () => {
  beforeEach(() => {
    const financialTransactionRepositoryMemory = new FinancialTransactionRepositoryMemory();
    const virtualWalletRepositoryMemory = new VirtualWalletRepositoryMemory();
    performWithdrawal = new PerformWithdrawal(financialTransactionRepositoryMemory, virtualWalletRepositoryMemory);
  });

  it('Should make a withdrawal', () => {
    const performWithdrawalRequestDTO = new PerformWithdrawalRequestDTO(
      new Date(),
      '259.692.740-38',
      'Recarga de celular',
      'Crêditos do mês de Maio',
      50,
    );
    expect(() => performWithdrawal.execute(performWithdrawalRequestDTO)).not.toThrow();
  });

  it('Should not withdraw from a non-existent wallet', () => {
    const performWithdrawalRequestDTO = new PerformWithdrawalRequestDTO(
      new Date(),
      '404.163.310-92',
      'Recarga de celular',
      'Crêditos do mês de Maio',
      50,
    );
    expect(() => performWithdrawal.execute(performWithdrawalRequestDTO)).toThrow(new Error('This wallet not exists'));
  });
});
