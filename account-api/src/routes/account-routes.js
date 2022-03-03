import Router from 'express';
import AccountControllerFactory from '../controller/factory/account-controller-factory.js';

const accountRouter = Router();

const accountController = AccountControllerFactory.create();

accountRouter.get('/account', accountController.findAll.bind(accountController));

accountRouter.get('/account/:id', accountController.findById.bind(accountController));

accountRouter.delete('/account/:id', accountController.remove.bind(accountController));

accountRouter.post('/account', accountController.create.bind(accountController));

accountRouter.put('/account/:id', accountController.update.bind(accountController));

export default accountRouter;

