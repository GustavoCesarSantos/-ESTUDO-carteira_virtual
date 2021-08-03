export default class ChangeCategoryRequestDTO {
  date: Date;

  walletIdentification: string;

  category: string;

  newCategory: any;

  constructor({
    date, transaction, category, newCategory,
  } : { date: string, transaction: string, category: string, newCategory: string }) {
    this.date = new Date(date);
    this.walletIdentification = transaction;
    this.category = category;
    this.newCategory = newCategory;
  }
}
