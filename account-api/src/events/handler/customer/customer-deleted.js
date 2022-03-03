export default class CustomerDeleted{

    customerModel;

    constructor(customerModel){
        this.customerModel = customerModel;
    }

    async handler(customer){
        await this.customerModel.deleteOne({
            customer_service_id: customer._id
        });
    }
}