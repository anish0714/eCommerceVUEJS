<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <div class="product-container">
        <h4 class="my-4 d-blue">PRODUCTS</h4>
        <div class="product-wrapper">
          <div
            v-for="items in topRated"
            :key="items._id"
            v-on:click="foodDetails(items)"
            class="item-wrapper"
          >
            <img :src="items.image" class="item-image" />
            <div class="cost-wrapper">
              <h5 class="d-blue center">{{ items.name }}</h5>
              <h5 class="d-blue center">{{ items.price }}</h5>
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
  name: "Dashboard",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    topRated() {
      return this.$store.state.topRated;
    },
  },
  methods: {
    foodDetails(item) {
      console.log("IREM", item);
      this.$router.push({ name: "item-details", params: item });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  border: 1px solid dodgerblue;
}

.product-container {
  margin: 20px;
  flex: 1;
}
.product-wrapper {
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid dodgerblue; */
  justify-content: center;
}

.item-wrapper {
  margin: 20px;
  border: 1px solid dodgerblue;
  border-radius: 10px;
  cursor: pointer;
}

.item-wrapper:hover {
  background: rgb(0, 32, 65);
  border: 1px solid rgb(0, 32, 65);
  box-shadow: 0 8px 16px 0 rgb(0, 32, 65, 0.6);
}

.cost-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
}

.content {
  background: black;
  flex: 1;
  overflow-y: auto;
}
.fw-600 {
  font-weight: 600;
}
.d-blue {
  color: dodgerblue;
}
.black {
  color: black;
}
.pointer {
  cursor: pointer;
}
.center {
  text-align: center;
}

/* ITEMS */
.item-image {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  padding: 5px;
  margin: 10px;
  border: 2px solid dodgerblue;
}
</style>
