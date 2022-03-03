import { Customer } from "../../../model/customer.js";
import CustomerCreated from "../customer/customer-created.js";


export default class CustomerCreatedFactory{
    static create(){
        const customerCreatedHandler = new CustomerCreated(Customer);
        return customerCreatedHandler;
    }
}