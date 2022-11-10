import Food from '../domain/models/Food';
import IFoodService from '../interfaces/services/IFoodService'

class FoodService extends IFoodService {
    create(food: Food): Promise<boolean> {
       return this.adapter.create(food);
    }
    fetch(): Promise<Food[]> {
      return this.adapter.fetch();
    }
    update(food: Food): Promise<boolean> {
        return this.adapter.update(food);
    }
    delete(foodId: number): Promise<boolean> {
        return this.adapter.delete(foodId);
    }

}

export default FoodService;