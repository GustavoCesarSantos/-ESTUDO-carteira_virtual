/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import RegisterVirtualWallerController from '../../RegisterVirtualWallet/RegisterVirtualWalletController';
import ReturnWalletBalanceController from '../../ReturnWalletBalance/ReturnWalletBalanceController';

export default class VirtualWalletControllers {
  async RegisterVirtualWallerController(req:Request, res: Response) {
    const registerVirtualWallerController = new RegisterVirtualWallerController();
    try {
      await registerVirtualWallerController.registerVirtualWallet(req.body.cpf);
      res.status(201).end();
    } catch (error) {
      res.status(422).json({ message: error.message });
    }
  }

  async ReturnWalletBalanceController(req:Request, res: Response) {
    const returnWalletBalanceController = new ReturnWalletBalanceController();
    try {
      const virtualWalletBalance = await returnWalletBalanceController.returnWalletBalance(req.params.cpf);
      res.status(200).json(virtualWalletBalance);
    } catch (error) {
      res.status(422).json({ message: error.message });
    }
  }
}
