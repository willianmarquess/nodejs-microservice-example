import CustomerController from "../controller/customer-controller.js";
import { Customer } from "../model/customer-model.js";
import rabbitInstance from "../provider/rabbitmq-provider.js";
import CustomerService from "../service/customer-service.js";

export default class CustomerControllerFactory {
    static create() {
        const customerService = new CustomerService(Customer, rabbitInstance);
        const customerController = new CustomerController(customerService);
        return customerController;
    }
};