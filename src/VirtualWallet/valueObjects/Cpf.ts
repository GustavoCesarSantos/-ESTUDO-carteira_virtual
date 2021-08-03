export default class Cpf {
  value: string;

  constructor(cpf: string) {
    if (!this.validate(cpf)) throw new Error('Invalid cpf.');
    this.value = cpf;
  }

  validate(cpf: string = ''): boolean {
    const FACTOR_DIGIT_1: number = 10;
    const FACTOR_DIGIT_2: number = 11;
    const MAX_DIGITS_1: number = 9;
    const MAX_DIGITS_2: number = 10;

    cpf = this.extractDigits(cpf);
    if (this.isInvalidLength(cpf)) return false;
    if (this.isBlocked(cpf)) return false;
    const digit1 = this.calculateDigit(cpf, FACTOR_DIGIT_1, MAX_DIGITS_1);
    const digit2 = this.calculateDigit(cpf, FACTOR_DIGIT_2, MAX_DIGITS_2);
    const calculatedCheckDigit = `${digit1}${digit2}`;
    return this.getCheckDigit(cpf) === calculatedCheckDigit;
  }

  extractDigits(cpf: string): string {
    return cpf.replace(/\D/g, '');
  }

  isInvalidLength(cpf: string): boolean {
    return cpf.length !== 11;
  }

  isBlocked(cpf: string): boolean {
    const [digit1] = cpf;
    return cpf.split('').every((digit) => digit === digit1);
  }

  calculateDigit(cpf: string, factor: number, max: number): number {
    let total: number = 0;
    for (const digit of this.toDigitArray(cpf).slice(0, max)) {
      total += digit * factor--;
    }
    return (total % 11 < 2) ? 0 : (11 - total % 11);
  }

  toDigitArray(cpf: string): number[] {
    return [...cpf].map((digit) => parseInt(digit));
  }

  getCheckDigit(cpf: string): string {
    return cpf.slice(9);
  }
}
