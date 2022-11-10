import Demand from '../../domain/models/Demand'

abstract class DemandAdapter {
    abstract fetch(): Promise<Demand[]>;
    abstract fetchByAccount(accountId: number): Promise<Demand[]>

} export default DemandAdapter;