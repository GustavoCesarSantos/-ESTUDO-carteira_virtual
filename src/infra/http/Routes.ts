import { Router } from 'express';
import FinancialTransactionControllers from '../../FinancialTransaction/adapters/controllers/FinancialTransactionControllers';
import VirtualWalletControllers from '../../VirtualWallet/adapters/controllers/VirtualWalletControllers';

const router = Router();
const virtualWalletControllers = new VirtualWalletControllers();
const financialTransactionControllers = new FinancialTransactionControllers();

router.post('/wallets', virtualWalletControllers.RegisterVirtualWallerController);
router.get('/wallets/:cpf/balance', virtualWalletControllers.ReturnWalletBalanceController);

router.post('/wallets/:cpf/withdrawal', financialTransactionControllers.performWithdrawal);
router.post('/wallets/:cpf/deposit', financialTransactionControllers.performDeposit);
router.put('/transactions/:transaction', financialTransactionControllers.changeCategory);

export { router };
