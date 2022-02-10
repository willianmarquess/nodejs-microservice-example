import { RABBIT_CONFIG } from "../config/rabbitmq-config.js";

export default class CustomerService{

    constructor(customerModel, messageBroker){
        this.customerModel = customerModel;
        this.messageBroker = messageBroker;
    }

    async create(name, cpf, birth_date) {
        const customer = await this.customerModel.create({ name, cpf, birth_date });
        this.messageBroker.publishInExchange(RABBIT_CONFIG.EXCHANGE_NAME, RABBIT_CONFIG.ROUTING_KEY_CUSTOMER_CREATED, customer);
        return customer;
    }

    async update(id, name, cpf, birth_date) {
        const customer = await this.customerModel.findByIdAndUpdate(id, {
            name,
            cpf,
            birth_date
        }, 
        {
            returnOriginal: false
        });
        this.messageBroker.publishInExchange(RABBIT_CONFIG.EXCHANGE_NAME, RABBIT_CONFIG.ROUTING_KEY_CUSTOMER_UPDATED, customer);
        return customer;
    }

    async findAll(){
        return await this.customerModel.find();
    }

    async findById(id) {
        return await this.customerModel.findById(id);
    }

    async remove(id) {
        await this.customerModel.remove(id);
        this.messageBroker.publishInExchange(RABBIT_CONFIG.EXCHANGE_NAME, RABBIT_CONFIG.ROUTING_KEY_CUSTOMER_DELETED, id);
    }
}