import UserRepositoryMemory from '../adapters/repository/UserRepositoryMemory';
import RegisterUser from './RegisterUser';
import RegisterUserRequestDTO from './RegisterUserRequestDTO';

let registerUser: RegisterUser;

describe.only('Register user test', () => {
  beforeEach(() => {
    const userRepositoryMemory = new UserRepositoryMemory();
    registerUser = new RegisterUser(userRepositoryMemory);
  });

  it('Should register a user', async () => {
    const registerUserRequest = new RegisterUserRequestDTO({ email: 'teste@teste.com.br', password: '123' });
    expect(() => registerUser.execute(registerUserRequest)).not.toThrow();
  });

  it('Should not register a duplicated user', async () => {
    const registerUserRequest = new RegisterUserRequestDTO({ email: 'testeMock@teste.com.br', password: '123' });
    registerUser.execute(registerUserRequest);
    await expect(() => registerUser.execute(registerUserRequest)).rejects.toThrow(new Error('User already exists'));
  });
});
