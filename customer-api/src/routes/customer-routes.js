import { Router } from "express";
import CustomerControllerFactory from "../factory/customer-controller-factory.js";

const customerRouter = Router();

const customerController = CustomerControllerFactory.create();

customerRouter.get('/customer', customerController.findAll.bind(customerController));

customerRouter.get('/customer/:id', customerController.findById.bind(customerController));

customerRouter.post('/customer', customerController.create.bind(customerController));

customerRouter.put('/customer/', customerController.update.bind(customerController));

customerRouter.delete('/customer/:id', customerController.remove.bind(customerController));

export default customerRouter;