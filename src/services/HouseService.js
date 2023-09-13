import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class HouseService {
    async getHouses() {
        let res = await api.get('api/houses')
        AppState.houses = res.data.map(house => new House(house))
        logger.log(AppState.houses)
    }

    async createHouse(houseData) {
        let res = await api.post('api/houses', houseData)
        const newHouse = new House(res.data)
        AppState.houses.push(newHouse)
        return newHouse
    }

    async getHouseById(houseId) {
        AppState.activeHouse = null
        let res = await api.get(`api/houses/${houseId}`)
        AppState.activeHouse = new House(res.data)
        logger.log(AppState.activeHouse)
    }
}

export const houseService = new HouseService()