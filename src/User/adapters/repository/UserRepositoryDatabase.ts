import { getCustomRepository } from 'typeorm';
import UserRepositoryPostgres from '../../../infra/database/repository/UserRepositoryPostgres';
import User from '../../User';
import UserRepository from './UserRepository';

export default class UserRepositoryDatabase implements UserRepository {
  userRepository: UserRepositoryPostgres;

  constructor() {
    this.userRepository = getCustomRepository(UserRepositoryPostgres);
  }

  async findUser(email: string): Promise<void> {
    const userDB = await this.userRepository.findByEmail(email);
    if (userDB) throw new Error('User already exists');
  }

  async findByEmail(email: string): Promise<User> {
    const userDB = await this.userRepository.findByEmail(email);
    if (!userDB) throw new Error('E-mail or password incorrect');
    const user = new User(userDB);
    return user;
  }

  async save(user: User): Promise<void> {
    await this.userRepository.createAndSave(user);
  }
}
