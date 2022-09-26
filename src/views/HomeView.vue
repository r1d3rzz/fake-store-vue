<template>
  <h2>Total Products ({{ items.length }})</h2>

  <div class="container" v-if="items.length">
    <div class="items">
      <div>
        <input
          type="text"
          placeholder="Search ...."
          v-model="search"
          class="searchBox"
        />
      </div>

      <div v-for="item in searchItems" :key="item.id">
        <SingleItem :item="item" />
      </div>
    </div>
    <div class="category">
      <CategoryName :items="items" />
    </div>
  </div>

  <div v-else>loading...</div>
</template>

<script>
import CategoryName from "../components/CategoryName";
import SingleItem from "../components/SingleItem";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import getItems from "@/composables/getItems";

export default {
  components: {
    CategoryName,
    SingleItem,
  },
  setup() {
    let search = ref("");

    let { items, error, load } = getItems();

    load();

    let searchItems = computed(() => {
      return items.value.filter((item) => {
        return item.title.toLowerCase().includes(search.value.toLowerCase());
      });
    });

    return { items, search, searchItems, error };
  },
};
</script>

<style>
.searchBox {
  width: 400px;
  margin-bottom: 20px;
  padding: 10px 5px;
  border-radius: 5px;
  font-size: 16px;
}
.container {
  display: flex;
  justify-content: space-between;
  width: 600px;
  margin: 0 auto;
}
</style>