import AccountController from "../account-controller.js";
import { Account } from "../../model/account.js";
import AccountService from "../../service/account-service.js";

export default class AccountControllerFactory{
    static create(){
        const accountService = new AccountService(Account);
        const accountController = new AccountController(accountService);
        return accountController;
    }
}