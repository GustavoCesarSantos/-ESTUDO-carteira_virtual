import VirtualWallet from './VirtualWallet';

export default class FinancialMovement {
  category: string;

  observation: string;

  constructor(category: string, observation: string) {
    this.category = category;
    this.observation = observation;
  }

  withDraw(virtualWallet: VirtualWallet, value: number): Object {
    virtualWallet.withDraw(value);
    return { category: this.category, observation: this.observation, value };
  }
}
