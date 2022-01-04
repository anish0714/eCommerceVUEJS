<template>
  <footer>
    <div class="footer">
      <div class="footer-left">
        <h4 class="bottom-text orange-red"
        style="cursor:pointer"
         v-on:click="goTo('home')">
          Shopping Kart
        </h4>
      </div>
      <div class="footer-right">
        <div>
          <h5 class="bottom-text right" v-on:click="goTo('aboutUs')">
            About Us
          </h5>
        </div>
        <div>
          <h5 class="bottom-text">Contect Us</h5>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    goTo(page) {
      if (page === "aboutUs") {
        this.$router.push("/about-us");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.footer {
  /* min-height: 50px; */
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid dodgerblue;
}
.footer-left {
  /* margin-left: 20px; */
}
.footer-right {
  display: flex;
  /* justify-content: space-evenly; */
}
.bottom-text {
  /* font-weight: 400; */
  font-size: 1rem;
  color: dodgerblue;
}
.right {
  margin-right: 20px;
  cursor: pointer;
}
.orange-red {
  color: orangered;
}
</style>
