import { ref } from "vue";

let getItem = (id) => {
  let item = ref([]);
  let error = ref(null);
  let api = "https://api.escuelajs.co/api/v1/products";

  let load = async () => {
    try {
      let res = await fetch(api + "/" + id);
      if (res.status == 404) {
        throw new Error("Item Not Found!");
      }
      let data = await res.json();
      item.value = data;
    } catch (err) {
      console.log(err);
    }
  };

  return { item, error, load };
};

export default getItem;
