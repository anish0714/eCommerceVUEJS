<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <h1 class="orange-red">TEAM</h1>
      <h3 class="d-blue">ANISH DANDEKAR</h3>
      <h3 class="d-blue">MAYANK MISHRA</h3>
      <h3 class="d-blue">PRANJAL PARIKH</h3>
      <h3 class="d-blue">JASKARAN SINGH</h3>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./common/Header";
import Footer from "./common/Footer";
export default {
  name: "AboutUs",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  border: 1px solid dodgerblue;
}
.content {
  background: black;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.d-blue {
  color: dodgerblue;
}
.orange-red {
  color: orangered;
}
</style>
