import FinancialTransaction from './FinancialTransaction';

export default interface FinancialTransactionRepository {
  save(financialTransaction: FinancialTransaction): void;
  updateCategory({
    date, walletIdentification, category, newCategory,
  } : { date: Date, walletIdentification: string, category: string, newCategory: string }): void;
}
