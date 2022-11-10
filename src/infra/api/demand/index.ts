import Demand from "../../../core/domain/models/Demand";
import { DTO } from "../../../core/domain/types/DTO";
import DemandAdapter from "../../../core/interfaces/adapter/DemandAdapter";
import { APIClient } from "../clients/APIClient";

class DemandAPI extends DemandAdapter {
   update(demand: Demand): Promise<boolean> {
       throw new Error("Method not implemented.");
   }
   delete(demandId: number): Promise<boolean> {
       throw new Error("Method not implemented.");
   }
   create(demand: Demand): Promise<boolean> {
       throw new Error("Method not implemented.");
   }
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