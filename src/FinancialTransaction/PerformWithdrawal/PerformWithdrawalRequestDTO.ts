export default class PerformWithdrawalRequestDTO {
  date: Date;

  cpf: string;

  category: string;

  observation: string;

  value: number;

  constructor(date: Date, cpf: string, category: string, observation: string, value: number) {
    this.date = date;
    this.cpf = cpf;
    this.category = category;
    this.observation = observation;
    this.value = value;
  }
}
