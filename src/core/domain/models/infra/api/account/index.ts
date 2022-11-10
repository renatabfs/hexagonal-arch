import AccountAdapter from "../../../../../interfaces/adapter/AccountAdapter";
import { DTO } from "../../../../types/DTO";
import Account from "../../../Account";
import { APIClient } from "../clients/APIClients";

class AccountAPI extends AccountAdapter {
    async fetch(): Promise<Account[]> {
      const response = await APIClient.get<DTO[]>("/accounts");
      return response.data.map(Account.fromJSON);
    }
} export default AccountAPI ;