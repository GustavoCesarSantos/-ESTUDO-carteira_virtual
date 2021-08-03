/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import ChangeCategoryController from '../../ChangeCategory/ChangeCategoryController';
import PerformDepositController from '../../PerformeDeposit/PerformeDepositController';
import PerformWithdrawalController from '../../PerformWithdrawal/PerformWithdrawalController';

export default class FinancialTransactionControllers {
  async performWithdrawal(req:Request, res: Response) {
    const performWithdrawal = new PerformWithdrawalController();
    try {
      await performWithdrawal.performWithdrawal(req.body);
      res.status(201).end();
    } catch (error) {
      res.status(422).json({ message: error.message });
    }
  }

  async performDeposit(req:Request, res: Response) {
    const performDeposit = new PerformDepositController();
    try {
      await performDeposit.performDeposit(req.body);
      res.status(201).end();
    } catch (error) {
      res.status(422).json({ message: error.message });
    }
  }

  async changeCategory(req:Request, res: Response) {
    const changeCategory = new ChangeCategoryController();
    try {
      await changeCategory.changeCategory({ ...req.params, ...req.body });
      res.status(201).end();
    } catch (error) {
      res.status(422).json({ message: error.message });
    }
  }
}
