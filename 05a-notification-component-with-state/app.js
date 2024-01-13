Vue.createApp({
  data() {
    return {
      h1text: "Airport Notification Center",
    };
  },
})
  .component("notification-message", {
    template: "#notification-message-template",
    props: {
      type: {
        type: String,
        default: "info",
      },
      header: {
        type: String,
        default: "Information",
      },
    },
    data() {
      return {
        hidden: false,
      };
    },
    methods: {
      hide() {
        this.hidden = true;
      },
      show() {
        this.hidden = false;
      },
    },
  })
  .mount("#app");
