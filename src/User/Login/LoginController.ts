import UserRepositoryDatabase from '../adapters/repository/UserRepositoryDatabase';
import Login from './Login';
import LoginRequestDTO from './LoginRequestDTO';
import LoginResponseDTO from './LoginResponseDTO';

export default class LoginController {
  userRepository: UserRepositoryDatabase;

  constructor() {
    this.userRepository = new UserRepositoryDatabase();
  }

  async login(body: any): Promise<LoginResponseDTO> {
    const login = new Login(this.userRepository);
    const loginDTO = new LoginRequestDTO(body);
    return login.execute(loginDTO);
  }
}
