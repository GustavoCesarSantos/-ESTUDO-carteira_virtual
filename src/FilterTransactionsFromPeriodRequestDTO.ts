export default class FilterTransactionsFromPeriodRequestDTO {
  cpf: string;

  startDate: Date;

  endDate: Date;

  constructor(cpf: string, startDate: Date, endDate: Date) {
    this.cpf = cpf;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
