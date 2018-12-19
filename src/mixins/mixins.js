export const NavigationFunction = {
  methods: {
    pushRoute(routeName) {
      this.$router.push(routeName);
    }
  }
};

export const tabModal = {
  data() {
    return {
      tabModal: "tab-home"
    };
  }
};
