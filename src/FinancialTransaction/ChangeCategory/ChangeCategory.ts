import ChangeCategoryRequestDTO from './ChangeCategoryRequestDTO';
import FinancialTransactionRepository from '../adapters/repository/FinancialTransactionRepository';

export default class ChangeCategory {
  financialTransactionRepository: FinancialTransactionRepository;

  constructor(
    financialTransactionRepository: FinancialTransactionRepository,
  ) {
    this.financialTransactionRepository = financialTransactionRepository;
  }

  execute(changeCategoryRequestDTO: ChangeCategoryRequestDTO): void {
    this.financialTransactionRepository.updateCategory(changeCategoryRequestDTO);
  }
}
