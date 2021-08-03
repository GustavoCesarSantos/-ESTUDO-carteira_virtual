import FinancialTransactionRepositoryMemory from '../adapters/repository/FinancialTransactionRepositoryMemory';
import PerformDeposit from './PerformDeposit';
import PerformDepositRequestDTO from './PerformDepositRequestDTO';
import VirtualWalletRepositoryMemory from '../../VirtualWallet/adapters/repository/VirtualWalletRepositoryMemory';

let performDeposit: PerformDeposit;

describe('Performe deposit test', () => {
  beforeEach(() => {
    const financialTransactionRepositoryMemory = new FinancialTransactionRepositoryMemory();
    const virtualWalletRepositoryMemory = new VirtualWalletRepositoryMemory();
    performDeposit = new PerformDeposit(
      financialTransactionRepositoryMemory,
      virtualWalletRepositoryMemory,
    );
  });

  it('Should make a deposit', () => {
    const performDepositRequestDTO = new PerformDepositRequestDTO({
      date: new Date().toString(),
      cpf: '259.692.740-38',
      category: 'Recarga de celular',
      observation: 'Crêditos do mês de Maio',
      value: 50,
    });
    expect(() => performDeposit.execute(performDepositRequestDTO)).not.toThrow();
  });

  it('Should not depoist from a non-existent wallet', async () => {
    const performDepositRequestDTO = new PerformDepositRequestDTO({
      date: new Date().toString(),
      cpf: '404.163.310-92',
      category: 'Recarga de celular',
      observation: 'Crêditos do mês de Maio',
      value: 50,
    });
    await expect(() => performDeposit.execute(performDepositRequestDTO)).rejects.toThrow(new Error('This wallet not exists'));
  });
});
