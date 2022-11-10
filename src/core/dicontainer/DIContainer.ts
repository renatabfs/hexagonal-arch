import IAccountService from '../interfaces/services/IAccountService';
import IFoodService from '../interfaces/services/IFoodService';
import IDemandService from '../interfaces/services/IDemandService';

abstract class DIContainer {
    abstract getAccountService(): IAccountService;
    abstract getFoodService(): IFoodService;
    abstract getDemandService(): IDemandService;
} export default DIContainer;