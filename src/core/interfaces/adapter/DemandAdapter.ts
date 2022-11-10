import Demand from '../../domain/models/Demand'

abstract class DemandAdapter {
    abstract fetch(): Promise<Demand[]>;
    abstract fetchByAccount(accountId: number): Promise<Demand[]>
    abstract update(demand: Demand): Promise<boolean>;
    abstract delete(demandId: number): Promise<boolean>;
    abstract create(demand: Demand): Promise<boolean>;
} export default DemandAdapter;