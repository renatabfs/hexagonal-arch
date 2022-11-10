import Food from '../../domain/models/Food';
import FoodAdapter from '../adapter/FoodAdapter';

abstract class IFoodService {
        constructor(protected readonly adapter: FoodAdapter) {
            this.adapter = adapter;
        }
    
        abstract create(food: Food): Promise<boolean>;
        abstract fetch(): Promise<Food[]>;
        abstract update(food: Food): Promise<boolean>;
        abstract delete(foodId: number): Promise<boolean>;
} export default IFoodService;