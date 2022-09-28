<template>
  <div class="mt-1">
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
        <div class="card-footer d-flex justify-content-between">
          <div>
            <button class="btn btn-sm btn-warning" @click="deleteItem">
              Delete
            </button>
          </div>
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
import Swal from "sweetalert2";

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

    let deleteItem = async () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch("http://localhost:3000/items/" + props.id, {
            method: "DELETE",
          })
            .then((_) => {
              return router.push({ name: "home" });
            })
            .catch((err) => console.log(err));
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    };

    return { item, goBack, addToCart, deleteItem };
  },
};
</script>

<style>
</style>