<template>
  <div class="itemContainer">
    <div style="text-align: start">
      {{ item.title }}
      <p>Category : {{ item.category.name }}</p>
      <p>Price : ${{ item.price }}.00</p>
      <p class="viewMore">
        <router-link
          :to="{ name: 'itemDetail', params: { id: item.id } }"
          class="text-decoration-none viweMore"
          >View More</router-link
        >
      </p>
    </div>
    <div>
      <img :src="item.images[2]" class="img-fluid rounded" width="120" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
.itemContainer {
  background-color: rgb(36, 28, 28);
  color: white;
  padding: 20px 10px;
  width: 400px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  cursor: pointer;
  user-select: none;
  color: yellow;
  transition: 0.2s ease;
}
a:hover {
  color: rgba(246, 255, 0, 0.754);
}
</style>