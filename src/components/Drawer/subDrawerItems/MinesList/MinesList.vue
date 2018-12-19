<template>
  <v-list-group v-model="selectIntermines.model" :prepend-icon="selectIntermines.model ? selectIntermines.icon : selectIntermines['icon-alt']" append-icon="" id="minesBox">
    
    <v-list-tile slot="activator">
      <v-list-tile-content>
        <v-list-tile-title>
          {{ selectIntermines.text }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  
    <SelectAllNone @selectAllFunction="selectAll()" />
    <MinesListSubTemplate :neighbourhoods="neighbourhoods" @changeNeighbourhood="changeNeighbourhood($event)" />
    <SelectedInterminesChildren v-if="renderSelectedInterminesChildren" :selectIntermineschildren="selectIntermines.children" :selected="selected" />
    <!--  select action for radio button and other mine options to be executed  -->
  </v-list-group>
</template>

<script>
  import axios from "axios"
  
  import SelectAllNone from "./SelectAllNone.vue"
  import MinesListSubTemplate from "./MinesListSubTemplate.vue"
  import SelectedInterminesChildren from "./SelectedInterminesChildren.vue"
  
  import {
    tabModal
  } from "@/mixins/mixins.js"
  export default {
    name: "MinesList",
    components: {
      SelectedInterminesChildren,
      MinesListSubTemplate,
      SelectAllNone
    },
    computed: {
      renderSelectedInterminesChildren() {
        if (this.selectIntermines.children.length) {
          return true
        } else {
          return false
        }
      }
    },
    mixins: [tabModal],
    created() {
      this.onCreated()
    },
    data() {
      return {
        toggleSelectCategory: true,
        toggleSelectMines: false,
        progressDialog: true,
        dialog: false,
        drawer: null,
        searchTerm: '',
        selectIntermines: {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Select InterMines',
          model: true,
          children: []
        },
        selected: [], 
        searchActive: false,
        emptyResultMines: [],
        failedSearchMines: [],
        protocol: document.location.protocol,
        host: document.location.host,
        modalData: null,
        minesList: null,
        neighbourhoods: []
      }
    },
    methods: {
      selectAll() {
        let vm = this;
        if (vm.toggleSelectMines) {
          this.selected = [];
        } else {
          vm.selected = [];
          vm.selectIntermines.children.map(item => {
            vm.selected.push(item);
          });
        }
        vm.toggleSelectMines = !vm.toggleSelectMines;
      },
      searchMine() {
        let vm = this
        if (vm.searchTerm.trim() === '' || vm.selected.length === 0) {
          alert('Please select a mine and use a search term to search the mines.')
          return
        }
        vm.$router.replace({
          'query': {
            'search': vm.searchTerm
          }
        })
        vm.failedSearchMines = []
        vm.emptyResultMines = []
        vm.searchActive = true
        vm.tabModal = 'tab-results'
        vm.selectIntermines.model = false
        vm.category = []
        vm.categoryFilters = []
        vm.selected.map((mineObj) => {
          mineObj.result = undefined
          let mineService = new intermine.Service({ // eslint-disable-line
            root: mineObj.url
          })
          let options = {
            q: vm.searchTerm
          }
          mineService.search(options).then((data) => {
            if (data !== undefined && data.wasSuccessful === true && data.statusCode === 200 && data.error === null) {
              mineObj.result = data
              mineObj.result.searchTerm = vm.searchTerm
              if (data.results.length === 0) {
                vm.emptyResultMines.push(mineObj.text)
              }
              if (data.results.length === 100) {
                mineObj.result.fetchMore = true
              } else {
                mineObj.result.fetchMore = false
              }
              vm.pushToCategoryList(data.facets.Category)
            } else {
              vm.failedSearchMines.push(mineObj.text)
            }
            vm.$forceUpdate()
          }, () => {
            vm.failedSearchMines.push(mineObj.text)
            vm.$forceUpdate()
          })
        })
      },
      onCreated() {
        let vm = this
        axios.get(`https://registry.intermine.org/service/instances`)
          .then(response => {
            vm.minesList = response.data.instances
            this.neighbourhoods = []
            response.data.instances.map((mine) => {
              mine.neighbours.map((neighbourhoodItem) => {
                if (this.neighbourhoods.indexOf(neighbourhoodItem) === -1) {
                  this.neighbourhoods.push(neighbourhoodItem)
                }
              })
              this.selectIntermines.children.push({
                text: mine.name,
                url: mine.url,
                neighbourhood: mine.neighbours
              })
            })
          }).then(() => {
            this.selectAll()
            vm.progressDialog = false
            if (this.$route.query.search) {
              this.searchTerm = this.$route.query.search
              this.searchMine()
            }
          })
      },
      changeNeighbourhood(neighbourhood) {
        let vm = this
        vm.selected = []
        vm.selectIntermines.children.map((item) => {
          if (item.neighbourhood.indexOf(neighbourhood) >= 0) {
            vm.selected.push(item)
          }
        })
      },
      pushToCategoryList(categoryObj) {
        let vm = this
        let categoryArray = Object.keys(categoryObj)
        categoryArray.forEach((item) => {
          if (vm.category.indexOf(item) < 0) {
            vm.category.push(item)
          }
          if (vm.categoryFilters.indexOf(item) < 0) {
            vm.categoryFilters.push(item)
          }
        })
        vm.category.sort()
      }
    }
  }
</script>