import FoodService from "./src/core/services/FoodService";
import FoodAPI from "./src/infra/api/food";

const service = new FoodService(new FoodAPI());

service.fetch();

async function getFoods() {
    const foods = await service.fetch();
    for (const food of foods){
        console.log(food.name);
    }
}
getFoods()