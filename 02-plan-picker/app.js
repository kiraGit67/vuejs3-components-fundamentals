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
    props: ["name"],
  })
  .mount("#app");
