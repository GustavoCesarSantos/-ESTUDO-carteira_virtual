import { EntityRepository, Repository } from 'typeorm';
import Transaction from '../entity/Transaction';

@EntityRepository(Transaction)
export default class TransactionRepositoryPostgres extends Repository<Transaction> {
  createAndSave(param: any) {
    const paramDB = this.create(param);
    this.save(paramDB);
  }

  updateWallet(query: any, value: any) {
    this.update(query, value);
  }
}
