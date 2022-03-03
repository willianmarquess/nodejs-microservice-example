export default class AccountService{

    accountModel;

    constructor(accountModel){
        this.accountModel = accountModel;
    }

    async create(balance, number, customerId) {
        const account = await this.accountModel.create({ balance, number, customer:customerId });
        return account;
    }
    
    async update(id, balance, number, customerId) {
        const customer = mongoose.Types.ObjectId(customerId);
        const account = await this.accountModel.findByIdAndUpdate(id, {
            balance,
            number,
            customer
        }, 
        {
            returnOriginal: false
        });
        return account;
    }
    
    async findAll() {
        const accounts = await this.accountModel.find().populate('customer').exec();
        return accounts;
    }
    
    async findById(id) {
        const account = await this.accountModel.findById(id).populate('customer').exec();
        return account;
    }
    
    async remove(id) {
        await this.accountModel.deleteOne({
            _id: id
        });
    }

}