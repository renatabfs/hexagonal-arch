import IDemandService from '../interfaces/services/IDemandService';
import Demand from '../domain/models/Demand';


class DemandService extends IDemandService {
    create(demand: Demand): Promise<boolean> {
        return this.adapter.create(demand);
    }
    fetch(): Promise<Demand[]> {
       return this.adapter.fetch();
    }
    update(demand: Demand): Promise<boolean> {
       return this.adapter.update(demand);
    }
    delete(demandId: number): Promise<boolean> {
       return this.adapter.delete(demandId)
    }
    fetchByAccount(accountId: number): Promise<Demand[]> {
       return this.adapter.fetchByAccount(accountId);
    }

}export default DemandService;