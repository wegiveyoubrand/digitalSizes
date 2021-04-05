import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

App.component('QuestionBox',{
    template: `
    <div class="question"></div>
    <div class="answers"></div>    `
})
