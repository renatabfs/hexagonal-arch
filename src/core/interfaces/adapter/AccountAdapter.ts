import Account from '../../domain/models/Account';

abstract class AccountAdapter {
    abstract fetch(): Promise<Account[]>
} export default AccountAdapter;