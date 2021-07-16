//console.log("I am Vue 3");

const app = Vue.createApp({
  //template: "<h2>Hi There</h2>",
  data() {
    return {
      title: "you don't know js",
      author: "Ashin",
      age: 20,
    };
  },
});
app.mount("#app");
