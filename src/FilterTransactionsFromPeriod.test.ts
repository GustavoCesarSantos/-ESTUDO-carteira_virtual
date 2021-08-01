import FilterTransactionsFromPeriod from './FilterTransactionsFromPeriod';
import FilterTransactionsFromPeriodRequestDTO from './FilterTransactionsFromPeriodRequestDTO';
import VirtualWalletRepositoryMemory from './VirtualWalletRepositoryMemory';

let filterTransactionsFromPeriod: FilterTransactionsFromPeriod;

describe('Register wallet test', () => {
  beforeEach(() => {
    const virtualWalletRepositoryMemory = new VirtualWalletRepositoryMemory();
    filterTransactionsFromPeriod = new FilterTransactionsFromPeriod(virtualWalletRepositoryMemory);
  });

  it('Should return transactions from certain periods', () => {
    const filterTransactionsFromPeriodRequestDTO = new FilterTransactionsFromPeriodRequestDTO(
      '377.950.170-88',
      new Date('1995-12-13T03:24:00'),
      new Date('1995-12-21T12:24:00'),
    );
    expect(() => filterTransactionsFromPeriod.execute(filterTransactionsFromPeriodRequestDTO)).not.toThrow();
  });

  it('Should not return transactions from a non-existent wallet', () => {
    const filterTransactionsFromPeriodRequestDTO = new FilterTransactionsFromPeriodRequestDTO(
      '377.950.170-80',
      new Date('1995-12-13T03:24:00'),
      new Date('1995-12-21T12:24:00'),
    );
    expect(() => filterTransactionsFromPeriod.execute(filterTransactionsFromPeriodRequestDTO)).toThrow(new Error('This wallet not exists'));
  });
});
