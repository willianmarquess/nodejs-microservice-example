import { Customer } from "../../../model/customer.js";
import CustomerUpdated from "../customer/customer-updated.js";

export default class CustomerUpdatedFactory{
    static create(){
        const customerUpdatedHandler = new CustomerUpdated(Customer);
        return customerUpdatedHandler;
    }
}