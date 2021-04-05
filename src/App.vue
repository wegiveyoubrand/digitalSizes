<template>
  <div id="app">
    <Header />
    <div class="digital-wrapper">
      <Questions />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Questions from "./components/Questions.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Questions,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  font-family: "Poppins", sans-serif;
  &,
  &::before,
  &::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100%;
  min-height: calc(100vh - 5rem);
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.digital-wrapper {
  padding: 2rem;
 
  margin-top: 60px;
}
</style>
