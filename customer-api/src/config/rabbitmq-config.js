import dotenv from 'dotenv';
dotenv.config();

const { RABBIT_USER, RABBIT_PASS, RABBIT_HOST, RABBIT_SERVER_PORT } = process.env;

export const RABBIT_CONFIG = {
    EXCHANGE_NAME: 'customer',
    EXCHANGE_TYPE_DIRECT: 'direct',
    ROUTING_KEY_CUSTOMER_CREATED: 'customer-created',
    ROUTING_KEY_CUSTOMER_UPDATED: 'customer-updated',
    ROUTING_KEY_CUSTOMER_DELETED: 'customer-deleted',
    QUEUE_CUSTOMER_CREATED: 'customer-created',
    QUEUE_CUSTOMER_UPDATED: 'customer-updated',
    QUEUE_CUSTOMER_DELETED: 'customer-deleted',
    RABBITMQ_URL: `amqp://${RABBIT_USER}:${RABBIT_PASS}@${RABBIT_HOST}:${RABBIT_SERVER_PORT}`,  
}