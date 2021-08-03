import { getCustomRepository } from 'typeorm';
import TransactionRepositoryPostgres from '../../../infra/database/repository/TransactionRepositoryPostgres';
import FinancialTransaction from '../../FinancialTransaction';
import FinancialTransactionRepository from './FinancialTransactionRepository';

export default class FinancialTransactionRepositoryDatabase implements FinancialTransactionRepository {
  transactionRepository: TransactionRepositoryPostgres;

  constructor() {
    this.transactionRepository = getCustomRepository(TransactionRepositoryPostgres);
  }

  async save(financialTransaction: FinancialTransaction): Promise<void> {
    await this.transactionRepository.createAndSave(financialTransaction);
  }

  async updateCategory({
    date, walletIdentification, category, newCategory,
  }: { date: Date; walletIdentification: string; category: string; newCategory: string; }): Promise<void> {
    const query = { date, wallet_identification: walletIdentification, category };
    await this.transactionRepository.updateWallet(query, { category: newCategory });
  }
}
