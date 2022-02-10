import rabbitInstance from "./rabbitmq-provider.js";

export default class RabbitMQSetup{
    static async init() {
        try {
            await rabbitInstance.connect();
        } catch (error) {
            console.log('error rabbitmq: ', error);
        }
    }
} 