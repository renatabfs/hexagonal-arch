
import APIDIContainer from "./src/core/dicontainer/api";
import WebDIContainer from "./src/core/dicontainer/web/index";

const service = new WebDIContainer().getAccountService();

async function  getFoods() {
const foods = await service.fetch();

for (const food of foods) {
    console.log(food.name);
}
} getFoods()