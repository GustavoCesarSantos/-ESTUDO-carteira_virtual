export default class FinancialTransaction {
  date: Date;

  walletIdentification: string;

  category: string;

  observation: string;

  value: number;

  constructor({
    date, cpf, category, observation, value,
  } : { date: Date, cpf: string, category: string, observation: string, value: number }) {
    this.date = date;
    this.walletIdentification = cpf;
    this.category = category;
    this.observation = observation;
    this.value = value;
  }
}
