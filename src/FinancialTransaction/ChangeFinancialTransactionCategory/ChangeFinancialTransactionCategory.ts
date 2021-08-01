import ChangeFinancialTransactionCategoryRequestDTO from './ChangeFinancialTransactionCategoryRequestDTO';
import FinancialTransactionRepository from '../FinancialTransactionRepository';

export default class ChangeFinancialTransactionCategory {
  financialTransactionRepository: FinancialTransactionRepository;

  constructor(
    financialTransactionRepository: FinancialTransactionRepository,
  ) {
    this.financialTransactionRepository = financialTransactionRepository;
  }

  execute(changeFinancialTransactionCategoryRequestDTO: ChangeFinancialTransactionCategoryRequestDTO): void {
    this.financialTransactionRepository.updateCategory(changeFinancialTransactionCategoryRequestDTO);
  }
}
