<template>
  <div class="d-flex cart-outer-div">
    <Header />
    <div class="cart-body">
      <div v-if="totalPrice !== 0" class="container">
        <h4 class="my-4 my-cart">My Cart</h4>
        <div class="d-flex my-3" style="justify-content: space-between">
          <h4 class="fw-600 d-blue">Summary</h4>
          <!-- <h4 class="fw-600 d-blue" style="margin-right: 49%">Cart</h4> -->
        </div>
        <div class="d-flex">
          <!-- <div v-show="totalPrice !== 0" class="row" style="width: 50%">
            <div class="col-md-4 d-blue">
              <h6>Total:</h6>
              <h6>Promo Code:</h6>
              <h6>Shipping:</h6>
              <div class="seperator"></div>
              <h6>Subtotal:</h6>
              <h6>Rs {{ totalPrice }}</h6>
            </div>
            
          </div> -->
          <div class="row" style="width: 100%">
            <div style="max-width: 100%" class="col-md-12 card">
              <ul style="padding: 0">
                <li
                  v-for="items in cartItems"
                  :key="items.id"
                  style="list-style: none"
                >
                  <div class="cart-items">
                    <img
                      :src="items.image"
                      width="50px"
                      height="50px"
                      style="border-radius: 50%"
                    />
                    <h6 class="mt-15 d-blue">{{ items.name }}</h6>
                    <div class="d-flex mt-10">
                      <button
                        v-on:click="removeItem(items)"
                        class="add d-blue"
                        type="button"
                      >
                        -
                      </button>
                      <span class="cart-quantity d-blue">{{
                        items.quantity
                      }}</span>
                      <button
                        v-on:click="addToCart(items)"
                        class="remove d-blue"
                        type="button"
                      >
                        +
                      </button>
                    </div>
                    <h6 class="mt-15 d-blue">
                      {{ items.price * items.quantity }}
                    </h6>
                  </div>
                  <div class="line"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="subtotal">
          <h6 class="d-blue" style="margin-right: 10px">Subtotal:</h6>
          <h6 class="d-blue">CAD {{ totalPrice }}</h6>
        </div>

        <div class="d-flex justify-content-center" style="margin: 5%">
          <button v-on:click="checkout" class="btn btn-primary" type="button">
            Checkout
          </button>
        </div>
      </div>
      <div v-else class="container my-5" style="text-align: center">
        <img src="../assets/shopping-cart.png" width="200px" />
        <div class="mt-4">
          <h4 class="orange-red">Your cart is empty</h4>
          <h5 class="d-blue">
            You can go to home page to view more items.
          </h5>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./common/Header";
import Footer from "./common/Footer";
import swal from "sweetalert";

export default {
  name: "Cart",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      item: 0,
    };
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addToCart", item);
    },
    removeItem(item) {
      this.$store.dispatch("removeItem", item);
    },
    checkout() {
      swal("Good job!", "Your order is placed successfully!", "success").then(
        (value) => {
          window.location.href = "/cart";
        }
      );
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map((el) => {
        price += el["quantity"] * el["price"];
      });
      return price;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-outer-div {
  flex-direction: column;
  height: 100vh;
}
.cart-body {
  /* background: #efe9e2; */
  background: black;
  flex: 1;
  overflow-y: auto;
  border: 1px solid dodgerblue;
}
.cart-quantity {
  display: inline-block;
  /* padding: 3px 6px; */
  width: 46px;
  height: 28px;
  border-radius: 2px;
  background-color: rgb(0, 32, 65);
  /* margin: 0 5px; */
  text-align: center;
}
.cart-items {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: rgb(0, 32, 65);
}
.my-cart {
  color: orange;
  font-weight: 600;
}
input[type="text"] {
  border: none;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
  outline: none;
}
.fw-600 {
  font-weight: 600;
}
.line {
  border: 1px solid dodgerblue;
  background: dodgerblue;
  border-radius: 100%;
}
.w-120 {
  width: 120%;
}
.w-60 {
  width: 60%;
}
.add,
.remove {
  width: 28px;
  height: 28px;
  background: rgb(0, 32, 65);
  border: 1px solid dodgerblue;
  cursor: pointer;
  font-size: 16px;
  border-radius: 7px;
  padding-top: 1px;
  outline: none;
}
.mt-10 {
  margin-top: 10px;
}
.mt-15 {
  margin-top: 15px;
}
.orange-red {
  color: orangered;
}
.darkblue {
  color: darkblue;
}
.d-blue {
  color: dodgerblue;
}
.seperator {
  border: 1px solid dodgerblue;
  margin-bottom: 5px;
  background-color: dodgerblue;
  width: 50%;
  border-radius: 100%;
}
.middle {
  align-items: center;
}
.card {
  border: 2px solid dodgerblue;
  background: rgb(0, 32, 65);
}
.subtotal {
  display: flex;
  justify-content: flex-end;
  margin: 20px;
}
</style>
