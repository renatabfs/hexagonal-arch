import Account from '../../domain/models/Account';
import AccountAdapter from '../adapter/AccountAdapter';

abstract class IAccountService {

    constructor(protected readonly adapter: AccountAdapter) {
        this.adapter = adapter;
    }

    abstract create(account: Account): Promise<boolean>;
    abstract fetch(): Promise<Account[]>;
    abstract update(account: Account): Promise<boolean>;
    abstract delete(accountId: number): Promise<boolean>;
} 
export default IAccountService;
