import { Router } from 'express';
import FinancialTransactionControllers from '../../FinancialTransaction/adapters/controllers/FinancialTransactionControllers';
import UserControllers from '../../User/adapters/controllers/UserControllers';
import VirtualWalletControllers from '../../VirtualWallet/adapters/controllers/VirtualWalletControllers';

const router = Router();
const virtualWalletControllers = new VirtualWalletControllers();
const financialTransactionControllers = new FinancialTransactionControllers();
const userControllers = new UserControllers();

router.post('/users', userControllers.RegisterUserController);
router.post('/login', userControllers.LoginController);

router.post('/wallets', userControllers.isAuthorized, virtualWalletControllers.RegisterVirtualWallerController);
router.get('/wallets/:cpf/balance', userControllers.isAuthorized, virtualWalletControllers.ReturnWalletBalanceController);

router.post('/wallets/:cpf/withdrawal', userControllers.isAuthorized, financialTransactionControllers.performWithdrawal);
router.post('/wallets/:cpf/deposit', userControllers.isAuthorized, financialTransactionControllers.performDeposit);
router.put('/transactions/:transaction', userControllers.isAuthorized, financialTransactionControllers.changeCategory);

export { router };
