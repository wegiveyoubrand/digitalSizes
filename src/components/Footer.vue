<template>
  <footer>
    <div class="mediaPlatforms">
      <div class="mediaPlatform facebook">
        <img src="../assets/logos/facebook-logo.svg" alt /> Facebook
      </div>
      <div class="mediaPlatform twitter">
        <img src="../assets/logos/twitter-logo.svg" alt /> Twitter
      </div>
      <div class="mediaPlatform instagram">
        <img src="../assets/logos/instagram-logo.png" alt /> Instagram
      </div>
      <div class="mediaPlatform whatsapp">
        <img src="../assets/logos/whatsapp-logo.svg" alt /> WhatsApp
      </div>
    </div>
  </footer>
</template>

<script>
import { mediaPlatforms } from "./db";

export default {
  name: "Footer",
  data() {
    mediaPlatforms;
  },
};
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  width: 100%;
  height: 5rem;
  bottom: 0;
  background-color: #000;
  display: flex;

  .mediaPlatforms {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .mediaPlatform {
      display: grid;
      place-items: center;
      font-weight: bold;

      img {
        height: 32px;
        width: 32px;
      }
    }
  }
}
</style>
