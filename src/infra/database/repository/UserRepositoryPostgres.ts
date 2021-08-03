import { EntityRepository, Repository } from 'typeorm';
import User from '../entity/User';

@EntityRepository(User)
export default class VirtualWalletRepositoryPostgres extends Repository<User> {
  createAndSave(param: any) {
    const paramDB = this.create(param);
    this.save(paramDB);
  }

  findByEmail(email: string) {
    return this.findOne({ where: { email } });
  }
}
