import ChangeFinancialTransactionCategory from './ChangeFinancialTransactionCategory';
import ChangeFinancialTransactionCategoryRequestDTO from './ChangeFinancialTransactionCategoryRequestDTO';
import FinancialTransactionRepositoryMemory from '../FinancialTransactionRepositoryMemory';

let changeFinancialTransactionCategory: ChangeFinancialTransactionCategory;

describe('Change financial transaction category', () => {
  beforeEach(() => {
    const financialTransactionRepositoryMemory = new FinancialTransactionRepositoryMemory();
    changeFinancialTransactionCategory = new ChangeFinancialTransactionCategory(financialTransactionRepositoryMemory);
  });

  it('Should change financial transaction category', () => {
    const changeFinancialTransactionCategoryRequestDTO = new ChangeFinancialTransactionCategoryRequestDTO({
      date: new Date('1995-12-17T03:24:00'),
      cpf: '490.310.060-09',
      category: 'Pagamento de conta',
      newCategory: 'Conta de Luz',
    });
    expect(() => changeFinancialTransactionCategory.execute(changeFinancialTransactionCategoryRequestDTO)).not.toThrow();
  });
});
