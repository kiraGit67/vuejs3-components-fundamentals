let PlanComponent = {
  template: "#plan-template",
  props: {
    name: { type: String, default: "The Single", required: true },
    price: { type: Number, default: 1.0, required: false },
  },
  data() {
    return {
      selected: false,
    };
  },
};

let PlanPickerComponent = {
  components: { plan: PlanComponent },
  template: "#plan-picker-template",
  data() {
    return {
      plans: [
        {
          name: "The Single",
          price: 1.0,
        },
        {
          name: "The Curious",
          price: 1.15,
        },
        {
          name: "The Addict",
          price: 1.25,
        },
        {
          name: "The Enjoyful",
          price: 1.2,
        },
        {
          name: "The Grateful",
          price: 1.1,
        },
        {
          name: "The Hacker",
          price: 1.35,
        },
        {
          name: "The Gambler",
          price: 1.5,
        },
      ],
    };
  },
};

const app = Vue.createApp({
  //components: { PlanPicker: PlanPickerComponent },
  components: { "plan-picker": PlanPickerComponent },
}).mount("#app");
