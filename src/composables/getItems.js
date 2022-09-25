import { ref } from "vue";

let getItems = () => {
  let items = ref([]);
  let error = null;
  let api = "https://api.escuelajs.co/api/v1/products";

  let load = async () => {
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

  return { items, error, load };
};

export default getItems;
