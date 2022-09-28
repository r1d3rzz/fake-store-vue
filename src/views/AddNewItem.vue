<template>
  <div class="mt-3 col-md-6 mx-auto text-start card">
    <div class="card-header text-center bg-secondary text-white">
      <div class="fs-3">Add New Item</div>
    </div>
    <div class="card-body">
      <form @submit.prevent="addItem">
        <div class="mb-3">
          <label for="title">Title</label>
          <input
            type="text"
            id="title"
            class="form-control"
            v-model="title"
            required
          />
        </div>

        <div class="mb-3">
          <label for="price">Price</label>
          <input
            type="text"
            id="price"
            class="form-control"
            v-model="price"
            required
          />
        </div>

        <div class="mb-3">
          <label for="description">Description</label>
          <input
            type="text"
            id="description"
            class="form-control"
            v-model="description"
            required
          />
        </div>

        <div class="mb-3">
          <label for="category">Category</label>
          <input
            type="text"
            id="category"
            class="form-control"
            v-model="category"
            required
          />
        </div>

        <div class="d-flex justify-content-between">
          <div>
            <button class="btn btn-sm btn-primary" :disabled="uploading">
              <div v-if="uploading">
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                Uploading
              </div>
              <div v-else>Upload</div>
            </button>
          </div>
          <div>
            <button class="btn btn-sm btn-danger" @click="back">Back</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { db } from "@/firebase/config";
import Swal from "sweetalert2";
export default {
  setup() {
    let router = useRouter();
    let title = ref("");
    let price = ref("");
    let description = ref("");
    let category = ref("");
    let uploading = ref(false);

    let addItem = async () => {
      let addnewValue = {
        title: title.value,
        price: price.value,
        description: description.value,
        category: {
          id: Math.random(),
          name: category.value,
          image: "",
        },
        images: [],
      };

      uploading.value = true;

      await db
        .collection("items")
        .add(addnewValue)
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1000,
          });
          return router.push({ name: "home" });
        })
        .catch((err) => console.log(err));
    };

    let back = () => {
      return router.go(-1);
    };

    return { back, title, price, category, description, addItem, uploading };
  },
};
</script>

<style>
</style>