//console.log("I am Vue 3");

const app = Vue.createApp({
  //template: "<h2>Hi There</h2>",
  data() {
    return {
      title: "you don't know js",
      author: "Ashin",
      age: 20,
      showBook: true,
    };
  },
  methods: {
    mouseoverHandler(event, data) {
      console.log("mouse over is working", event.type, data);
    },
    mouseLeaveHander(event) {
      console.log("mouse leave is working", event.type);
    },
    dblclickHandler(event) {
      console.log("Double Click is Working", event.type);
    },
  },
});
app.mount("#app");
