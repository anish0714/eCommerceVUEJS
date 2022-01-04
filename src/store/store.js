import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

// import cake from "../assets/cake.jpg";
// import noodles from "../assets/noodles.jpg";
// import fries from "../assets/fries.jpg";

// import macroni from "../assets/macroni.jpg";
// import pizza from "../assets/pizza.jpg";
// import salad from "../assets/salad.jpg";

// import samosa from "../assets/samosa.jpg";
// import soup from "../assets/soup.jpg";
// import tacos from "../assets/tacos.jpg";

const URI = "http://localhost:4000/product";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    topRated: [],

    count: 0,
    cartItemCount: 0,
    cartItems: [],
    totalPrice: 0,
  },
  mutations: {
    getProducts(state, payload) {
      console.log("PAYLOAD ", payload.data);
      state.topRated = payload.data;
    },

    increment(state) {
      state.count++;
    },
    addToCart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id == item.id);
        if (bool == true) {
          let itemIndex = state.cartItems.findIndex((el) => el.id == item.id);
          state.cartItems[itemIndex]["quantity"] += 1;
        } else {
          state.cartItems.push(item);
        }
      } else {
        state.cartItems.push(item);
      }
      state.cartItemCount++;
    },
    removeItem(state, payload) {
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id == payload.id);
        console.log("bool", bool);
        if (bool) {
          let index = state.cartItems.findIndex((el) => el.id == payload.id);
          //to prevent quantity from being negative
          state.cartItems[index]["quantity"] === 0
            ? (state.cartItems[index]["quantity"] = 0)
            : (state.cartItems[index]["quantity"] -= 1);
          if (state.cartItems[index]["quantity"] === 0)
            state.cartItems.splice(index, 1);
          if (state.cartItemCount !== 0) state.cartItemCount--;
        }
      }
    },
  },
  actions: {
    getProducts: (context, payload) => {
      axios.get(URI).then((res) => {
        payload = res.data;
        context.commit("getProducts", payload);
      });
    },
    addToCart: (context, payload) => {
      context.commit("addToCart", payload);
    },
    removeItem: (context, payload) => {
      context.commit("removeItem", payload);
    },
    increment: (context, payload) => {
      setTimeout(() => {
        context.commit("increment");
      }, 5000);
    },
  },
});
