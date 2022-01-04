<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <h1 class="orange-red">SIGNUP</h1>
      <div class="d-flex justify-content-center" style="margin: 5%">
        <input type="text" class="loginInput" placeholder="Full name" />
        <input type="email" class="loginInput" placeholder="Email address" />
        <input type="password" class="loginInput" placeholder="Password" />
        <input type="text" class="loginInput" placeholder="Location" />
        <button v-on:click="login" class="btn btn-primary" type="button">
          Login
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./common/Header";
import Footer from "./common/Footer";
export default {
  name: "Signup",
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
.d-flex {
  flex-direction: column;
}
.loginInput {
  margin: 10px 0;
  border: none;
  outline: none;
  padding: 10px 20px;
}
.d-flex {
  flex-direction: column;
}
.loginInput {
  margin: 10px 0;
  border: 1px solid dodgerblue;
  border-radius: 3px;
  background-color: black;
  outline: none;
  padding: 10px 20px;
}
</style>
