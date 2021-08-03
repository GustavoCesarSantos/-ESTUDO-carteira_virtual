import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import UserRepository from '../adapters/repository/UserRepository';
import LoginRequestDTO from './LoginRequestDTO';
import LoginResponseDTO from './LoginResponseDTO';

export default class Login {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(loginRequestDTO: LoginRequestDTO): Promise<LoginResponseDTO> {
    const user = await this.userRepository.findByEmail(loginRequestDTO.email);
    const passwordMatch = await compare(loginRequestDTO.password, user.password);
    if (!passwordMatch) throw new Error('E-mail or password incorrect');
    const token = sign({ email: user.email }, '69fc81f5a7a7fc79caa271f8f1177e07', {
      subject: user.email,
      expiresIn: '1d',
    });
    const loginResponseDTO = new LoginResponseDTO(token);
    return loginResponseDTO;
  }
}
