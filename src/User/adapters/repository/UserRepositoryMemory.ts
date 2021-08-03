import User from '../../User';
import UserRepository from './UserRepository';

const userMock = new User({ email: 'testeMock@teste.com.br', password: '$2a$08$eTShtIi/0frSD1ZuSKkGjOKVP4i2RFbtm.4UkYIeE4oShFGJwPeDy' });

export default class UserRepositoryMemory implements UserRepository {
  users: User[];

  constructor() {
    this.users = [
      userMock,
    ];
  }

  save(user: User) {
    this.users.push(user);
  }

  findUser(email: string) {
    const user = this.users.find((userMemory) => userMemory.getEmail() === email);
    if (user) throw new Error('User already exists');
    return Promise.resolve(user);
  }

  findByEmail(email: string) {
    const user = this.users.find((userMemory) => userMemory.getEmail() === email);
    if (!user) throw new Error('E-mail or password incorrect');
    return Promise.resolve(user);
  }
}
