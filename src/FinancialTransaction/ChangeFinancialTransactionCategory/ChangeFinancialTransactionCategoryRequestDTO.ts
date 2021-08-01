export default class ChangeFinancialTransactionCategoryRequestDTO {
  date: Date;

  walletIdentification: string;

  category: string;

  newCategory: any;

  constructor({
    date, cpf, category, newCategory,
  } : { date: Date, cpf: string, category: string, newCategory: string }) {
    this.date = date;
    this.walletIdentification = cpf;
    this.category = category;
    this.newCategory = newCategory;
  }
}
