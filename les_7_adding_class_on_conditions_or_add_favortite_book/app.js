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
          img: "img/1.jpg",
          isFav: true,
        },
        {
          title: "Book 2",
          author: "Ashin Indavudha",
          age: 24,
          img: "img/2.jpg",
          isFav: false,
        },
        {
          title: "Book 3",
          author: "Ashin Revata",
          age: 28,
          img: "img/3.jpg",
          isFav: true,
        },
      ],
      showBook: true,
      link: "http://www.google.com",
    };
  },
});
app.mount("#app");
