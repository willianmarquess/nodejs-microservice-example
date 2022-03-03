# NodeJS Microservices Example: Javascript, Express, MongoDB, RabbitMQ

![GitHub repo size](https://img.shields.io/github/repo-size/willianmarquess/nodejs-microservice-example?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/willianmarquess/nodejs-microservice-example?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/willianmarquess/nodejs-microservice-example?style=for-the-badge)

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Nodejs >= 6.9
* Docker
* Docker Compose


Para executar o projeto siga os seguintes passos:
1. rode o comando: docker-compose up -d

## Motivação 	:thought_balloon:

O projeto foi desenvolvido para fins de estudo sobre microserviços e comunicação assíncrona utilizando um message broker, a ideia foi desenvolver dois microserviços: customer-api e account-api,
cada serviço com o seu banco de dados e contexto separados se comunicando através de mensagens assíncronas utilizando o message broker RabbitMQ.

## Analisando os microserviços

1. customer-api: serviço que armazena informações do cliente, que contém um escopo simples e armazena apenas os dados da entidade Customer: name, cpf, birth_date
2. account-api: serviço que armazena e gerencia informações da conta do cliente, contém um escopo separado do contexto do customer-api, e armazena dados das seguintes entidades: {Account: balance, number, customer}, {Customer: name, document_number, customer_service_id}

Fluxo de eventos (comunicação assíncrona)
- Quando um customer é modificado (CRUD) no contexto do customer-api ele dispara um evento para o message broker (customer-created, customer-updated, customer-deleted), esse evento é enviado para uma fila no RabbitMQ e no serviço account-api existem os consumers que irão alimentar o banco de dados com esses eventos, promovendo assim uma integridade nos dados dos dois serviços.

<img src="https://files.slack.com/files-pri/TM13XHBBQ-F0368HR9HKJ/micro-services-img.png">
