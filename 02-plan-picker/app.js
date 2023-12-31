Vue.createApp({
  data() {
    return {
      plans: ["The Single", "The Curious", "The Addict"],
    };
  },
})
  .component("plan", {
    template: "#plan-template",
  })
  .mount("#app");
