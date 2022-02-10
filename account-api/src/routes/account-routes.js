import Router from 'express';
import AccountControllerFactory from '../factory/account-controller-factory.js';

const accountRouter = Router();

const accountController = AccountControllerFactory.create();

accountRouter.get('/account', accountController.findAll);

accountRouter.get('/account/:id', accountController.findById);

accountRouter.delete('/account/:id', accountController.remove);

accountRouter.post('/account', accountController.create);

accountRouter.put('/account/:id', accountController.update);

export default accountRouter;

