<template>
  <div>
    <h2 v-if="filterItems.length">
      Category - {{ category }} ({{ filterItems.length }})
    </h2>

    <div class="" v-if="items.length">
      <input
        type="text"
        placeholder="Search ...."
        v-model="search"
        class="searchBox"
      />
    </div>

    <div v-if="items.length" class="container">
      <div>
        <div v-for="item in filterItems" :key="item.id">
          <SingleItem :item="item" />
        </div>
      </div>

      <div>
        <CategoryName :items="items" />
      </div>
    </div>

    <div v-else>
      <LoadingVew />
    </div>
  </div>
</template>

<script>
import LoadingVew from "../components/LoadingVew";
import CategoryName from "../components/CategoryName";
import SingleItem from "../components/SingleItem";
import getItems from "@/composables/getItems";
import { computed, ref } from "@vue/runtime-core";
export default {
  components: {
    LoadingVew,
    CategoryName,
    SingleItem,
  },
  props: ["category"],
  setup(props) {
    let { items, error, load } = getItems();
    let search = ref("");

    load();

    let filterItems = computed(() => {
      return items.value.filter((item) => {
        if (search.value == "") {
          return item.category.name.includes(props.category);
        } else {
          return item.title.toLowerCase().includes(search.value.toLowerCase());
        }
      });
    });

    return { items, filterItems, search };
  },
};
</script>

<style>
</style>