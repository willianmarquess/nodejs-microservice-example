import { RABBIT_CONFIG } from "../config/rabbitmq-config.js";
import CustomerCreatedFactory from "../events/handler/factory/customer-created-factory.js";
import CustomerDeletedFactory from "../events/handler/factory/customer-deleted-factory.js";
import CustomerUpdatedFactory from "../events/handler/factory/customer-updated-factory.js";
import rabbitInstance from "./rabbitmq-provider.js";

export default class RabbitMQSetup{
    static async init() {
        try {
            await rabbitInstance.createConnection();
            await rabbitInstance.consumeMessage(RABBIT_CONFIG.QUEUE_CUSTOMER_CREATED, (message) => {
                CustomerCreatedFactory.create().handler(JSON.parse(message.content.toString()))
            });

            await rabbitInstance.consumeMessage(RABBIT_CONFIG.QUEUE_CUSTOMER_UPDATED, (message) => {
                CustomerUpdatedFactory.create().handler(JSON.parse(message.content.toString()))
            });

            await rabbitInstance.consumeMessage(RABBIT_CONFIG.QUEUE_CUSTOMER_DELETED, (message) => {
                CustomerDeletedFactory.create().handler(JSON.parse(message.content.toString()))
            });
        } catch (error) {
            console.log('error in rabbitmq: error: '+error);
        }
    }
} 