import UserRepositoryMemory from '../adapters/repository/UserRepositoryMemory';
import Login from './Login';
import LoginRequestDTO from './LoginRequestDTO';
import LoginResponseDTO from './LoginResponseDTO';

let login: Login;

describe.only('Login test', () => {
  beforeEach(() => {
    const userRepositoryMemory = new UserRepositoryMemory();
    login = new Login(userRepositoryMemory);
  });

  it('Should login a user', async () => {
    const LoginRequest = new LoginRequestDTO({ email: 'testeMock@teste.com.br', password: '123' });
    const token = await login.execute(LoginRequest);
    expect(token).toBeInstanceOf(LoginResponseDTO);
  });

  it('Should not login a user when passed a invalid password', async () => {
    const LoginRequest = new LoginRequestDTO({ email: 'testeMock@teste.com.br', password: '1234' });
    await expect(() => login.execute(LoginRequest)).rejects.toThrow(new Error('E-mail or password incorrect'));
  });
});
