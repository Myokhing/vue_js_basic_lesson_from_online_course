//console.log("I am Vue 3");

const app = Vue.createApp({
  //template: "<h2>Hi There</h2>",
  data() {
    return {
      books: [
        {
          title: "you don't know js",
          author: "Ashin",
          age: 20,
        },
        {
          title: "Book 2",
          author: "Ashin Indavudha",
          age: 24,
        },
        {
          title: "Book 3",
          author: "Ashin Revata",
          age: 28,
        },
      ],
      showBook: true,
      link: "http://www.google.com",
    };
  },
});
app.mount("#app");
