import Dexie from "dexie";

const indexdb = new Dexie("coffee_cart");
indexdb.version(1).stores({
  cart: "++id, ide, nama_menu, image, price, unit"
});

export {indexdb};
