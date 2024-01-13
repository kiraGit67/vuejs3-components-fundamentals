Vue.createApp({
  data() {
    return {
      h1text: "Airport Notification Center",
      messages: [
        {
          id: 1,
          type: "info",
          header: "Good Morning!",
          text: "Enjoy your flight!",
        },
        {
          id: 2,
          type: "success",
          header: "Ah Yeah!",
          text: "Your flight will be in time!",
        },
        {
          id: 3,
          type: "warning",
          header: "Attention!",
          text: "Your flight will arrive with a delay of 30 to 60 minutes.",
        },
        {
          id: 4,
          type: "error",
          header: "Oh No!",
          text: "Your flight has just been cancelled. Look onto the departure table for an alternative flight.",
        },
      ],
    };
  },
})
  .component("notification-message", {
    template: "#notification-message-template",
    props: {
      id: {
        type: Number,
        required: true,
      },
      type: {
        type: String,
        default: "info",
      },
      header: {
        type: String,
        default: "Information",
      },
      text: {
        type: String,
        default: "This is an information",
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
