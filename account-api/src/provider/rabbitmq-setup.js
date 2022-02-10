import rabbitInstance from "./rabbitmq-provider.js";

export default class RabbitMQSetup{
    static async init() {
        try {
            await rabbitInstance.createConnection();
        } catch (error) {
            throw error;
        }
    }
} 