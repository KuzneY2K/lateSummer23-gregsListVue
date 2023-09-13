<template>
    <div class="form-container p-5 m-0">
        <form @submit.prevent="createHouse" v-if="account">
            <h2 v-if="!account">Sign In if you want to list a house.</h2>
            <div class="form-group">
                <label for="description">House Description</label>
                <textarea v-model="houseData.description" class="form-control" id="description" rows="6"
                    placeholder="Tell us something about your house."></textarea>
            </div>
            <div class="form-group">
                <label for="imgUrl">House Image</label>
                <input type="url" v-model="houseData.imgUrl" class="form-control" id="imgUrl"
                    placeholder="Post the URL for your listing.">
            </div>
            <div class="form-group">
                <label for="year">Year</label>
                <input type="number" v-model="houseData.year" class="form-control" id="year" placeholder="How many year?">
            </div>
            <div class="form-group">
                <label for="price">House Price</label>
                <input type="number" v-model="houseData.price" class="form-control" id="price"
                    placeholder="How much this cost?">
            </div>
            <div class="form-group">
                <label for="bedrooms">Bedrooms</label>
                <input type="number" v-model="houseData.bedrooms" class="form-control" id="bedrooms"
                    placeholder="How many bedrooms?">
            </div>
            <div class="form-group">
                <label for="bathrooms">Bathrooms</label>
                <input type="number" v-model="houseData.bathrooms" class="form-control" id="bathrooms"
                    placeholder="How many bedrooms?">
            </div>
            <div class="form-group">
                <label for="levels">Levels</label>
                <input type="number" v-model="houseData.levels" class="form-control" id="levels"
                    placeholder="How many level?">
            </div>
            <div class="div btn-container text-center">
                <button class="btn btn-success mt-3 w-50" type="submit">SUBMIT</button>
            </div>
        </form>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import Pop from '../utils/Pop.js';
import { houseService } from '../services/HouseService.js';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';
export default {
    setup() {
        const houseData = ref({})
        const router = useRouter()
        async function createHouse() {
            try {
                logger.log(`${houseData.value} MAKING HOUSE`)
                const newHouse = await houseService.createHouse(houseData.value)
                houseData.value = {}
                logger.log(newHouse)
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            houseData,
            createHouse,
            account: computed(() => AppState.account)
        }
    }
}
</script>

<style scoped></style>