import { db } from "@/firebase/config";
import { ref } from "vue";

let getItem = (id) => {
  let item = ref([]);
  let error = ref(null);

  let load = async () => {
    try {
      let res = await db.collection("items").doc(id).get();
      item.value = { id: res.id, ...res.data() };
    } catch (err) {
      error.value = err.message;
    }
  };

  return { item, error, load };
};

export default getItem;
