<template>
    <router-link :to="{ name: 'House Details', params: { houseId: house.id } }">
        <div class="card rounded-5 elevation-5">
            <div class="bg-image">
                <img :src="house.imgUrl" class="img-fluid rounded rounded-5 elevation-5 img-fluid"
                    style="height: 20rem; width: 100%;" />
            </div>
            <div class="card-body">
                <h5 class="card-price">${{ house.price.toLocaleString('en-US') }}</h5>
                <p class="card-text">{{ house.description }}</p>
                <div class="rooms d-flex justify-content-around">
                    <p class="bathrooms">Bathrooms: {{ house.bathrooms }}</p>
                    <p class="bedrooms">Bedrooms: {{ house.bedrooms }}</p>
                </div>
                <div class="btn-container d-flex justify-content-center">
                    <button v-if="account.id == house.creatorId" class="btn btn-danger" @click="deleteHouse">DELETE LISTING
                        <i class="mdi mdi-delete"></i>
                    </button>
                    <a href="#!" class="btn btn-primary">BUY HOUSE NOW!</a>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { House } from '../models/House.js';
import { houseService } from '../services/HouseService.js';
import { logger } from '../utils/Logger.js';
export default {
    props: { house: { type: House, required: true } },
    setup() {
        return {
            account: computed(() => AppState.account)
        }
    }
}
</script>

<style scoped></style>