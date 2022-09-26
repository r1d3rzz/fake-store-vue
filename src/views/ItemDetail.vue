<template>
  <div class="mt-5">
    <div class="col-md-7 mx-auto">
      <div class="card">
        <div class="card-header bg-primary text-white fs-4">
          {{ item.title }}
        </div>
        <div class="card-body text-start">
          <div
            class="d-flex justify-content-around align-items-center"
            v-if="item.images"
          >
            <div v-for="img in item.images" :key="img" class="mb-5">
              <img :src="img" class="img-fluid" alt="img" />
            </div>
          </div>

          <div>
            <h5 class="mb-3" v-if="item.category">
              Category -
              <router-link
                class="text-decoration-none"
                :to="{
                  name: 'category',
                  params: { category: item.category.name },
                }"
                >{{ item.category.name }}</router-link
              >
            </h5>
            <p><strong>Price</strong> : ${{ item.price }}.00</p>
            {{ item.description }}
          </div>

          <div class="mt-3 d-flex justify-content-center">
            <button class="btn btn-md btn-outline-secondary" @click="addToCart">
              <i class="fas fa-cart-plus text-warning me-2"></i> Add to Cart
            </button>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-end">
          <div>
            <button class="btn btn-sm btn-danger" @click="goBack">Back</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getItem from "@/composables/getItem";
import { useRouter } from "vue-router";

export default {
  props: ["id"],
  setup(props) {
    let router = useRouter();
    let { item, error, load } = getItem(props.id);

    load();

    let goBack = () => {
      return router.go(-1);
    };

    let addToCart = () => {
      alert("added Successfully");
    };

    return { item, goBack, addToCart };
  },
};
</script>

<style>
</style>