<template>
  <header>
    <div class="header">
      <div v-on:click="goTo('home')" class="logo">
        <h4 class="shopping-kart orange-red">Shopping Kart</h4>
        <!-- <img
          src="../../assets/breakfast.png"
          width="45px"
          height="45px"
          style="margin-left: 10px"
        /> -->
      </div>
      <div class="header-right">
        <img
          src="../../assets/cart.png"
          class="cart-logo cart-icon"
          v-on:click="goTo('cart')"
        />
        <span class="cart-count">{{ count }}</span>

        <h5 v-on:click="goTo('login')" class="login">Login</h5>
        <h5 v-on:click="goTo('signup')" class="register">Sign Up</h5>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    goTo(page) {
      if (page === "cart") {
        this.$router.push("/cart");
      } else if (page === "login") {
        this.$router.push("/login");
      } else if (page === "signup") {
        this.$router.push("/signup");
      } else {
        this.$router.push("/");
      }
    },
  },
  computed: {
    count() {
      return this.$store.state.cartItemCount;
    },
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid dodgerblue;
}
.header-right {
  /* width: 70%; */
  /* justify-content: space-evenly; */
  /* padding-top: 3px; */
  display: flex;
  flex-direction: row;
}
.logo {
  display: flex;
  margin-left: 15px;
  padding: 6px;
  cursor: pointer;
}

.shopping-kart {
  color: dodgerblue;
  /* font-weight: 600; */
  /* margin-top: 7px; */
  align-self: center;
  font-size: 1rem;
}
.cart-count {
  font-size: 15px;
  color: black;
  padding: 0 5px;
  /* margin-left: -40px; */
  margin-right: 10px;
  margin-top: -10px;
  background: dodgerblue;
  height: 20px;
  border-radius: 50%;
}
.cart-icon {
  font-size: 24px;
  cursor: pointer;
  height: 30px;
  width: 30px;
  filter: sepia(50%) saturate(900%) brightness(200%) hue-rotate(180deg);
}
.login,
.register {
  color: dodgerblue;
  font-size: 1rem;
  margin-right: 20px;
  cursor: pointer;
}
.orange-red {
  color: orangered;
}
</style>
