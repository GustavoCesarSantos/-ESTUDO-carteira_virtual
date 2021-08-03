import ChangeCategory from './ChangeCategory';
import ChangeCategoryRequestDTO from './ChangeCategoryRequestDTO';
import FinancialTransactionRepositoryDatabase from '../adapters/repository/FinancialTransactionRepositoryDatabase';

export default class ChangeCategoryController {
  financialTransactionRepository: FinancialTransactionRepositoryDatabase;

  constructor() {
    this.financialTransactionRepository = new FinancialTransactionRepositoryDatabase();
  }

  async changeCategory(body: any): Promise<void> {
    const changeCategory = new ChangeCategory(this.financialTransactionRepository);
    const changeCategoryRequestDTO = new ChangeCategoryRequestDTO(body);
    await changeCategory.execute(changeCategoryRequestDTO);
  }
}
