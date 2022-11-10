import IAccountService from "../../interfaces/services/IAccountService";
import IDemandService from "../../interfaces/services/IDemandService";
import IFoodService from "../../interfaces/services/IFoodService";
import DIContainer from "../DIContainer";
import AccountFileSys from '../../../infra/api/filesSys/account/index'
import FoodService from '../../services/FoodService'
import FoodFileSys from '../../../infra/api/filesSys/food/index'
import  AccountService from '../../services/AccountService'
import DemandFileSys from '../../../infra/api/filesSys/demand/index'
import DemandService from '../../services/DemandService'
import DemandFoodFileSys from "../../../infra/api/filesSys/demandFood";


class APIDIContainer extends DIContainer {
    getAccountService(): IAccountService {
      return new AccountService(new AccountFileSys());
    }
    getFoodService(): IFoodService {
       return new FoodService(new FoodFileSys())
    }
    getDemandService(): IDemandService {
      return new DemandService(new DemandFileSys(), new DemandFoodFileSys())
    }
    
}

export default APIDIContainer;