import UserRepositoryDatabase from '../adapters/repository/UserRepositoryDatabase';
import RegisterUser from './RegisterUser';
import RegisterUserRequestDTO from './RegisterUserRequestDTO';

export default class RegisterUserController {
  userRepository: UserRepositoryDatabase;

  constructor() {
    this.userRepository = new UserRepositoryDatabase();
  }

  async registerUser(user: any): Promise<void> {
    const registerUser = new RegisterUser(this.userRepository);
    const registerUserDTO = new RegisterUserRequestDTO(user);
    await registerUser.execute(registerUserDTO);
  }
}
