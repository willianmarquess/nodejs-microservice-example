export default class CustomerUpdated{

    customerModel;

    constructor(customerModel){
        this.customerModel = customerModel;
    }

    async handler(customer){
        await this.customerModel.findOneAndUpdate({ customer_service_id: customer._id }, 
            { 
                name: customer.name, 
                document_number: customer.cpf, 
                customer_service_id: customer._id 
            });
    }
}