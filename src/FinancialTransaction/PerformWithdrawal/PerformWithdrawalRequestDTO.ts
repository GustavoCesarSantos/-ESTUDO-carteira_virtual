export default class PerformWithdrawalRequestDTO {
  date: Date;

  cpf: string;

  category: string;

  observation: string;

  value: number;

  constructor({
    date, cpf, category, observation, value,
  } : {date: string, cpf: string, category: string, observation: string, value: number}) {
    this.date = new Date(date);
    this.cpf = cpf;
    this.category = category;
    this.observation = observation;
    this.value = value;
  }
}
