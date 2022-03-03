export default class CustomerCreated{

    customerModel;

    constructor(customerModel){
        this.customerModel = customerModel;
    }
    async handler(customer){
        await this.customerModel.create({ name: customer.name, document_number: customer.cpf, customer_service_id: customer._id })
    }
}