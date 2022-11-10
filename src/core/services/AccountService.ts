import IAccountService from '../interfaces/services/IAccountService';
import Account from '../domain/models/Account';

class AccountService extends IAccountService {
    create(account: Account): Promise<boolean> {
      return this.adapter.create(account);
    }
    fetch(): Promise<Account[]> {
        return this.adapter.fetch();
    }
    update(account: Account): Promise<boolean> {
        return this.adapter.update(account);
    }
    delete(accountId: number): Promise<boolean> {
        return this.adapter.delete(accountId);
    }

} export default AccountService;