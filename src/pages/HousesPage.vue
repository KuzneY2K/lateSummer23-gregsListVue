<template>
    <div class="main-container">
        <section class="row p-0 m-0">
            <div class="col-12 p-0 m-0">
                <HousesForm />
            </div>
        </section>
        <section class="row p-0 m-0">
            <div v-for="house in houses" :key="house.id" class="col-md-4 col-12 house-card p-0 m-0 rounded p-5">
                <HouseCard :house="house" />
            </div>
        </section>
    </div>
</template>

<script>
import Pop from '../utils/Pop.js';
import { houseService } from '../services/HouseService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js'

export default {
    setup() {
        onMounted(getHouses)
        async function getHouses() {
            try {
                await houseService.getHouses()
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            houses: computed(() => AppState.houses.reverse()),
            getHouses
        }
    }
}
</script>

<style scoped></style>