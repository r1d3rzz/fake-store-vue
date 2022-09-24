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
export default {
  components: { SingleItem },
  setup() {
    let api = "https://api.escuelajs.co/api/v1/products";

    let items = ref([]);
    let search = ref("");

    let getItems = async () => {
      try {
        let res = await fetch(api);
        if (res.status === 404) {
          throw new Error("url not found");
        }
        let data = await res.json();
        items.value = data;
      } catch (err) {
        console.log(err.message);
      }
    };

    let searchItems = computed(() => {
      return items.value.filter((item) => {
        return item.title.toLowerCase().includes(search.value.toLowerCase());
      });
    });

    getItems();

    return { items, search, searchItems };
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