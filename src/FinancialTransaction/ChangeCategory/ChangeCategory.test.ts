import ChangeCategory from './ChangeCategory';
import ChangeCategoryRequestDTO from './ChangeCategoryRequestDTO';
import FinancialTransactionRepositoryMemory from '../adapters/repository/FinancialTransactionRepositoryMemory';

let changeCategory: ChangeCategory;

describe('Change financial transaction category', () => {
  beforeEach(() => {
    const financialTransactionRepositoryMemory = new FinancialTransactionRepositoryMemory();
    changeCategory = new ChangeCategory(financialTransactionRepositoryMemory);
  });

  it('Should change financial transaction category', () => {
    const changeCategoryRequestDTO = new ChangeCategoryRequestDTO({
      date: '1995-12-17T03:24:00',
      transaction: '490.310.060-09',
      category: 'Pagamento de conta',
      newCategory: 'Conta de Luz',
    });
    expect(() => changeCategory.execute(changeCategoryRequestDTO)).not.toThrow();
  });
});
