import DemandAdapter from "../../../../../interfaces/adapter/DemandAdapter";
import { DTO } from "../../../../types/DTO";
import Demand from '../../../Demand'
import { APIClient } from "../clients/APIClients";

class DemandAPI extends DemandAdapter {
   async fetch(): Promise<Demand[]> {
    const response = await APIClient.get<DTO[]>("/demand");
    return response.data.map(Demand.fromJSON);
   }
   async fetchByAccount(accountId: number): Promise<Demand[]> {
    const response = await APIClient.get<DTO[]>(`/accounts/${accountId}/demands`);
    return response.data.map(Demand.fromJSON);
   }
    }
export default DemandAPI;