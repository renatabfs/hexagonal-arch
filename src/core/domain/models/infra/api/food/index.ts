import FoodAdapter from "../../../../../interfaces/adapter/FoodAdapter";
import { DTO } from "../../../../types/DTO";
import Food from "../../../Food";
import { APIClient } from "../clients/APIClient";

class FoodAPI extends FoodAdapter {
    async fetch(): Promise<Food[]> {
    const response = await APIClient.get<DTO[]>('/foods')
    return response.data.map(Food.fromJSON)
    }

    async create(food: Food): Promise<boolean>{
        await APIClient.post("/foods", food.toJSON());
        return true;
    }
}

export default FoodAPI;