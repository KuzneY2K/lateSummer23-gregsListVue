<template>
    <div v-if="activeHouse" class="container">
        <section class="row">
            <div class="col-12">
                <h1 class="text-center">House Year {{ activeHouse.year }}</h1>
                <h1 class="text-center">Price ${{ activeHouse.price }}</h1>
                <img :src="activeHouse.imgUrl" class="img-fluid" alt="">
                <p>{{ activeHouse.description }}</p>
                <div class="div d-flex flex-row justify-content-around">
                    <h4>Bedrooms: {{ activeHouse.bedrooms }}</h4>
                    <h4>Bathrooms: {{ activeHouse.bathrooms }}</h4>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { houseService } from '../services/HouseService.js';
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';

export default {
    setup() {
        onMounted(() => { getHouseById() })
        const route = useRoute()
        const router = useRouter()
        async function getHouseById() {
            let houseId = route.params.houseId
            await houseService.getHouseById(houseId)
        }
        return {
            getHouseById,
            activeHouse: computed(() => AppState.activeHouse)
        };
    },
};
</script>


<style></style>