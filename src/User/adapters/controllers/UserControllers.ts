/* eslint-disable class-methods-use-this */
import { NextFunction, Request, Response } from 'express';
import IsAuthorizedController from '../../IsAuthorized/IsAuthorizedController';
import LoginController from '../../Login/LoginController';
import RegisterUserController from '../../RegisterUser/RegisterUserController';

export default class UserControllers {
  async RegisterUserController(req:Request, res: Response) {
    const registerUserController = new RegisterUserController();
    try {
      await registerUserController.registerUser(req.body);
      res.status(201).end();
    } catch (error) {
      res.status(422).json({ message: error.message });
    }
  }

  async LoginController(req: Request, res: Response) {
    const loginController = new LoginController();
    try {
      const token = await loginController.login(req.body);
      res.status(200).json(token);
    } catch (error) {
      res.status(422).json({ message: error.message });
    }
  }

  async isAuthorized(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;
    if (!authToken) return res.status(401).json({ error: 'Token missing' });
    const isAuthorizedController = new IsAuthorizedController();
    try {
      const sub = isAuthorizedController.isAuthorized(authToken);
      req.user_id = sub;
      return next();
    } catch (error) {
      return res.status(401).end();
    }
  }
}
