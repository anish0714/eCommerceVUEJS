<template>
  <div class="d-flex item-details-outer">
    <Header />
    <div class="item-details">
      <div class="container mb-5">
        <div class="container mb-5">
          <h4 class="my-4 d-blue">Add Item to cart</h4>
          <div class="row">
            <div class="col-md-4" style="cursor: pointer">
              <img :src="details.image" class="item-image" />
            </div>
            <div class="col-md-4" style="cursor: pointer">
              <h5 class="my-4 d-blue">Name: {{ details.name }}</h5>
              <h5 class="my-4 d-blue">Price: {{ details.price }}</h5>
              <h5 class="my-4 d-blue">
                Shipping Cost: {{ details.shippingCost }}
              </h5>
              <div>
                <button
                  v-on:click="goToCart"
                  class="btn btn-primary right-space"
                >
                  Go to Cart
                </button>
                <button
                  v-on:click="addToCart"
                  class="btn btn-success right-space"
                >
                  Add Item
                </button>
                <button v-on:click="removeItem" class="btn btn-danger">
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./common/Header";
import Footer from "./common/Footer";

export default {
  name: "ItemDetails",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      details: this.$route.params,
    };
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
    addToCart() {
      // this.$store.commit("addToCart");
      this.$store.dispatch("addToCart", this.details);
      console.log("this.$store", this.$store.state.cartItems);
    },
    removeItem() {
      // this.$store.commit("removeItem");
      this.$store.dispatch("removeItem", this.details);
    },
  },
  created() {
    if (this.$route.params._id !== undefined) {
      localStorage.setItem("details", JSON.stringify(this.$route.params));
    }
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem("details"));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-details-outer {
  flex-direction: column;
  height: 100vh;
}
.item-details {
  background: black;
  flex: 1;
  overflow-y: auto;
  border: 1px solid dodgerblue;
}
.fw-600 {
  font-weight: 600;
}
.d-blue {
  color: dodgerblue;
}
.right-space {
  margin-right: 10px;
}
.item-image {
  border: 2px solid dodgerblue;
  padding: 5px;
  height: 300px;
  width: 300px;
  border-radius: 15px;
}
</style>
