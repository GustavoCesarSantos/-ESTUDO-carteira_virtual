import FinancialTransaction from '../../FinancialTransaction';
import FinancialTransactionRepository from './FinancialTransactionRepository';

const financialTransactionMock = new FinancialTransaction({
  date: new Date('1995-12-17T03:24:00'),
  cpf: '490.310.060-09',
  category: 'Pagamento de conta',
  observation: 'Conta de Luz de Outubro',
  value: 100,
});

export default class FinancialTransactionRepositoryMemory implements FinancialTransactionRepository {
  financialTransactions: FinancialTransaction[];

  constructor() {
    this.financialTransactions = [
      financialTransactionMock,
    ];
  }

  save(financialTransaction: FinancialTransaction): void {
    this.financialTransactions.push(financialTransaction);
  }

  updateCategory({
    date, walletIdentification, category, newCategory,
  } : { date: Date, walletIdentification: string, category: string, newCategory: string }): void {
    this.financialTransactions[0].category = newCategory;
  }
}
