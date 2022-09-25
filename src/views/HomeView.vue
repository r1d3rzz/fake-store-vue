<template>
  <div>
    <input
      type="text"
      placeholder="Search ...."
      v-model="search"
      class="searchBox"
    />
  </div>

  <div v-if="items.length > 0">
    <div v-for="item in searchItems" :key="item.id">
      <SingleItem :item="item" />
    </div>
  </div>

  <div v-else>
    <div>Loading...</div>
  </div>
</template>

<script>
import SingleItem from "../components/SingleItem";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import getItems from "@/composables/getItems";

export default {
  components: { SingleItem },
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
  margin: 20px 0;
  padding: 10px 5px;
  border-radius: 5px;
  font-size: 16px;
}
</style>