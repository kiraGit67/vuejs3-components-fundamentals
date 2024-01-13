Vue.createApp({
  data() {
    return {
      h1text: "Airport Notification Center",
      messages: [
        {
          id: 1,
          time: "08:00 am",
          type: "info",
          header: "Good Morning!",
          text: "Enjoy your flight!",
        },
        {
          id: 2,
          time: "09:45 am",
          type: "success",
          header: "Ah Yeah!",
          text: "Your flight will be in time!",
        },
        {
          id: 3,
          time: "01:05 pm",
          type: "warning",
          header: "Attention!",
          text: "Your flight to Dubai will arrive with a delay of 30 to 60 minutes.",
        },
        {
          id: 4,
          time: "01:15 pm",
          type: "error",
          header: "Oh No!",
          text: "Your flight to New York City has just been cancelled. Look onto the departure table for an alternative flight.",
        },
      ],
    };
  },
})
  .component("notification-message", {
    template: "#notification-message-template",
    props: {
      message: {
        type: Object,
        required: true,
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
