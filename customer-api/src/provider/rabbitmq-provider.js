import { connect } from "amqplib";
import { RABBIT_CONFIG } from "../config/rabbitmq-config.js";

class RabbitMQProvider {

    connection;
    channel;

    constructor(url) {
        this.url = url;
    }

    async connect() {
        try {
            if (!this.connection) {
                this.connection = await connect(this.url);
                this.channel = await this.connection.createChannel();
                console.log('rabbitmq connected');
            }
        } catch (error) {
            console.log('try to reconnect rabbitmq...');
            return this.connect();
        }
    }

    async createExchange(exchangeName, exchangeType) {
        await this.channel.assertExchange(exchangeName, exchangeType, { durable: true });
    }

    async createQueue(queueName) {
        await this.channel.assertQueue(queueName, { durable: true });
    }

    async bindQueue(queueName, exchangeName, routingKey = '') {
        await this.channel.bindQueue(queueName, exchangeName, routingKey);
    }

    async publishInQueue(queue, message) {
        return await this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
    }

    publishInExchange(exchange, routingKey, message) {
        return this.channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(message)));
    }


    async consumeMessage(queue, callback) {
        return await this.channel.consume(queue, (message) => {
            callback(message);
            this.channel.ack(message);
        })
    }
}

const rabbitInstance = new RabbitMQProvider(RABBIT_CONFIG.RABBITMQ_URL);
export default rabbitInstance;