import Food from '../../domain/models/Food'

abstract class FoodAdapter {
    abstract fetch(): Promise <Food[]>
    abstract create(food: Food): Promise<boolean>;
}
export default FoodAdapter;