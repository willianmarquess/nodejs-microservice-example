export default class CustomerController{

    constructor(customerService){
        this.customerService = customerService;
    }

    async create(req, res) {
        try {
            const { name, cpf, birth_date } = req.body;
            const customer = await this.customerService.create(name, cpf, birth_date);
            res.status(200).json({ customer });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const { id, name, cpf, birth_date } = req.body;
            const customer = await this.customerService.update(id, name, cpf, birth_date);
            res.status(200).json({ customer });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const customers = await this.customerService.findAll();
            res.status(200).json({ customers });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const customer = await this.customerService.findById(id);
            res.status(200).json({ customer });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async remove(req, res) {
        try {
            const { id } = req.params;
            await this.customerService.remove(id);
            res.status(204).json();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}