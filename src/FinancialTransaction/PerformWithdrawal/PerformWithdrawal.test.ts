import FinancialTransactionRepositoryMemory from '../adapters/repository/FinancialTransactionRepositoryMemory';
import PerformWithdrawal from './PerformWithdrawal';
import PerformWithdrawalRequestDTO from './PerformWithdrawalRequestDTO';
import VirtualWalletRepositoryMemory from '../../VirtualWallet/adapters/repository/VirtualWalletRepositoryMemory';

let performWithdrawal: PerformWithdrawal;

describe('Perform withdrawal test', () => {
  beforeEach(() => {
    const financialTransactionRepositoryMemory = new FinancialTransactionRepositoryMemory();
    const virtualWalletRepositoryMemory = new VirtualWalletRepositoryMemory();
    performWithdrawal = new PerformWithdrawal(
      financialTransactionRepositoryMemory,
      virtualWalletRepositoryMemory,
    );
  });

  it('Should make a withdrawal', () => {
    const performWithdrawalRequestDTO = new PerformWithdrawalRequestDTO({
      date: new Date().toString(),
      cpf: '259.692.740-38',
      category: 'Recarga de celular',
      observation: 'Crêditos do mês de Maio',
      value: 50,
    });
    expect(() => performWithdrawal.execute(performWithdrawalRequestDTO)).not.toThrow();
  });

  it('Should not withdraw from a non-existent wallet', async () => {
    const performWithdrawalRequestDTO = new PerformWithdrawalRequestDTO({
      date: new Date().toString(),
      cpf: '404.163.310-92',
      category: 'Recarga de celular',
      observation: 'Crêditos do mês de Maio',
      value: 50,
    });
    await expect(() => performWithdrawal.execute(performWithdrawalRequestDTO)).rejects.toThrow(new Error('This wallet not exists'));
  });
});
