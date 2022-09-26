<template>
  <div class="categoryContainer sticky-top">
    <h3>Categories</h3>

    <div class="categoryItem">
      <router-link to="/" class="categoryLink"> All </router-link>
    </div>
    <div v-for="category in categories" :key="category.id">
      <div class="categoryItem">
        <router-link
          :to="{ name: 'category', params: { category } }"
          class="categoryLink"
        >
          {{ category }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["items"],
  setup(props) {
    let categories = ref([]);
    props.items.forEach((item) => {
      if (!categories.value.includes(item.category.name)) {
        categories.value.push(item.category.name);
      }
    });
    return { categories };
  },
};
</script>

<style scoped>
.categoryLink {
  text-decoration: none;
  color: white;
}

a {
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  user-select: none;
  cursor: pointer;
  display: block;
}

a:hover {
  color: white;
}

a.router-link-exact-active {
  background-color: red;
}
</style>