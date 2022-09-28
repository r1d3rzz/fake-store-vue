import { db } from "@/firebase/config";
import { ref } from "vue";

let getItems = () => {
  let items = ref([]);
  let error = null;

  let load = async () => {
    try {
      let res = await db.collection("items").get();
      items.value = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { items, error, load };
};

export default getItems;
