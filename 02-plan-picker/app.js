Vue.createApp({
  data() {
    return {
      plans: [
        "The Single",
        "The Curious",
        "The Addict",
        "The Enjoyful",
        "The Grateful",
        "The Hacker",
        "The Gambler",
      ],
    };
  },
})
  .component("plan", {
    template: "#plan-template",
    props: {
      name: { type: String, default: "The Single", required: true },
      price: { type: Number, default: 1.0, required: false },
    },
  })
  .mount("#app");
