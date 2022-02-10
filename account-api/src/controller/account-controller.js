export default class AccountController{

    accountService;

    constructor(accountService){
        this.accountService = accountService;
    }

    async create (req, res) {
        try {
            const { balance, number, customerId } = req.body;
            const account = await this.accountService.create(balance, number, customerId);
            res.status(201).json ({ account });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    
    async update (req, res) {
        try {
            const { id } = req.params;
            const { balance, number, customerId } = req.body;
            const account = await this.accountService.update(id, balance, number, customerId);
            res.status(200).json ({ account });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    
    async findAll (req, res) {
        try {
            const accounts = await this.accountService.findAll();
            res.status(201).json ({ accounts });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    
    async findById (req, res) {
        try {
            const { id } = req.params;
            const account = await this.accountService.findById(id);
            res.status(201).json ({ account });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    
    async remove (req, res) {
        try {
            const { id } = req.params;
            await this.accountService.remove(id);
            res.status(204).json();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}