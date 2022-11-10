import Demand from "../../../core/domain/models/Demand";
import { DTO } from "../../../core/domain/types/DTO";
import DemandAdapter from "../../../core/interfaces/adapter/DemandAdapter";
import { APIClient } from "../clients/APIClient";

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