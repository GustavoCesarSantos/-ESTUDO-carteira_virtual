import ReturnWalletBalanceRequestDTO from './ReturnWalletBalanceRequestDTO';
import ReturnWalletBalanceResponseDTO from './ReturnWalletBalanceResponseDTO';
import VirtualWalletRepository from '../VirtualWalletRepository';

export default class ReturnWalletBalance {
  virtualWalletRepository: VirtualWalletRepository;

  constructor(
    virtualWalletRepository: VirtualWalletRepository,
  ) {
    this.virtualWalletRepository = virtualWalletRepository;
  }

  execute(returnWalletBalanceRequestDTO: ReturnWalletBalanceRequestDTO): ReturnWalletBalanceResponseDTO {
    const virtualWallet = this.virtualWalletRepository.findByCpf(returnWalletBalanceRequestDTO.cpf);
    if (!virtualWallet) throw new Error('This wallet not exists');
    const returnWalletBalanceResponseDTO = new ReturnWalletBalanceResponseDTO(virtualWallet.getTotal());
    return returnWalletBalanceResponseDTO;
  }
}
