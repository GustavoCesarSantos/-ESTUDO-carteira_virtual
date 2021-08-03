import ReturnWalletBalanceRequestDTO from './ReturnWalletBalanceRequestDTO';
import ReturnWalletBalanceResponseDTO from './ReturnWalletBalanceResponseDTO';
import VirtualWalletRepository from '../adapters/repository/VirtualWalletRepository';

export default class ReturnWalletBalance {
  virtualWalletRepository: VirtualWalletRepository;

  constructor(
    virtualWalletRepository: VirtualWalletRepository,
  ) {
    this.virtualWalletRepository = virtualWalletRepository;
  }

  async execute(returnWalletBalanceRequestDTO: ReturnWalletBalanceRequestDTO): Promise<ReturnWalletBalanceResponseDTO> {
    const virtualWallet = await this.virtualWalletRepository.findByCpf(returnWalletBalanceRequestDTO.cpf);
    const returnWalletBalanceResponseDTO = new ReturnWalletBalanceResponseDTO(virtualWallet.getTotal());
    return returnWalletBalanceResponseDTO;
  }
}
