import User from '../../User';

export default interface UserRepository {
  save(user: User): void;
  findUser(email: string): Promise<void>;
  findByEmail(email: string): Promise<User>;
}
