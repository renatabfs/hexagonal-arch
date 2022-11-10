import Demand from '../../domain/models/Demand'
import DemandAdapter from '../adapter/DemandAdapter'

abstract class IDemandService {
        constructor(protected readonly adapter: DemandAdapter) {
            this.adapter = adapter;
        }
    
        abstract create(demand: Demand): Promise<boolean>;
        abstract fetch(): Promise<Demand[]>;
        abstract update(demand: Demand): Promise<boolean>;
        abstract delete(demandId: number): Promise<boolean>;
        abstract fetchByAccount(accountId: number): Promise<Demand[]>
} export default IDemandService;