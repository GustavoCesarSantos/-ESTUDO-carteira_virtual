import { hash } from 'bcryptjs';
import UserRepository from '../adapters/repository/UserRepository';
import User from '../User';
import RegisterUserRequestDTO from './RegisterUserRequestDTO';

export default class RegisterUser {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(registerUserRequestDTO: RegisterUserRequestDTO): Promise<void> {
    await this.userRepository.findUser(registerUserRequestDTO.email);
    const passwordHash = await hash(registerUserRequestDTO.password, 8);
    const user = new User({ email: registerUserRequestDTO.email, password: passwordHash });
    await this.userRepository.save(user);
  }
}
