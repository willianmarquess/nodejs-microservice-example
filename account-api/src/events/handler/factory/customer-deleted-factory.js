import { Customer } from "../../../model/customer.js";
import CustomerDeleted from "../customer/customer-deleted.js";

export default class CustomerDeletedFactory{
    static create(){
        const customerDeletedHandler = new CustomerDeleted(Customer);
        return customerDeletedHandler;
    }
}