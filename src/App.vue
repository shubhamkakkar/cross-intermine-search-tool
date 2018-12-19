<template>
  <div id="app">
    <Toolbar/>
    <Drawer />
  </div>
</template>

<script>
  import Drawer from "@/components/Drawer/Drawer.vue"
  import Toolbar from "@/components/Toolbar/Toolbar.vue"
  export default {
    name: 'App',
    data() {
      return {
        drawerModel: false,
        tabs: []
      }
    },
    mounted() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
          });
        });
      });
    },
    components: {
      Drawer,
      Toolbar
    },
    methods: {
      addToTab(tab) {
        let vm = this;
        let tabArray = [];
        const unshift = (tabName, tabIcon) => vm.tabs.unshift({
          tabName,
          tabIcon
        });
        let icon = undefined;
        switch (tab) {
          case "Home":
            icon = 'home'
            break;
          case "Saved Items":
            icon = "library_books"
            break;
          case "Intermines":
            icon = "apps"
            break;
          default:
            break;
        }
        if (vm.tabs.length === 0) {
          unshift(tab, icon );
        } else {
  
          vm.tabs.map(res => {
            tabArray.push(res.tabName)
          })
          if (tabArray.indexOf(tab) === -1) {
            unshift(tab, icon);
          }
        }
      }
    }
  };
</script>