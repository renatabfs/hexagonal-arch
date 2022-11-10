import DIContainer from '../DIContainer';
import IAccountService from '../../interfaces/services/IAccountService';
import IDemandService from '../../interfaces/services/IDemandService';
import IFoodService from '../../interfaces/services/IFoodService';
import AccountAPI from '../../../infra/api/account/index'
import AccountService from '../../services/AccountService'
import FoodAPI from '../../../infra/api/food/index'
import FoodService from '../../services/FoodService'
import DemandAPI from '../../../infra/api/demand/index'
import DemandService from '../../services/DemandService'
import DemandFoodAPI from '../../../infra/api/demandFood';

class WebDIContainer extends DIContainer {
    getAccountService(): IAccountService {
        return new AccountService(new AccountAPI())
    }
    getFoodService(): IFoodService {
        return new FoodService(new FoodAPI())
    }
    getDemandService(): IDemandService {
        return new DemandService(new DemandAPI(), new DemandFoodAPI())
    }

    }

export default WebDIContainer;