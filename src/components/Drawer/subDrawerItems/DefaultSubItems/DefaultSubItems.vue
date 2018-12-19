<template>
    <v-list class="pt-0" dense>
        <v-divider />
        <v-list-tile @click="defaultListClickAction(listitem.functionID)" v-for="listitem in listitems" :key="listitem.title">
            <v-list-tile-action>
                <v-icon>{{ listitem.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>{{ listitem.title }}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
    import {
        NavigationFunction,
        tabModal
    } from "@/mixins/mixins.js"
    export default {
        name: "defaultSubItems",
        mixins: [NavigationFunction, tabModal],
        data() {
            return {
                listitems: [{
                        title: "Home",
                        icon: "home",
                        functionID: 1
                    },
                    {
                        title: "Saved Items",
                        icon: "library_books",
                        functionID: 2
                    },
                    {
                        title: "Explore InterMines",
                        icon: "apps",
                        functionID: 3
                    },
                ],
                localStorageActive: false,
                interminesActive: false,
                localData: [],
            }
        },
        methods: {
            defaultListClickAction(functionID) {
                switch (functionID) {
                    case 1:
                        this.pushRoute("/home")
                        break;
                    case 2:
                        this.getLocalStorage()
                        break;
                    case 3:
                        this.activateInterMinesTab();
                        break;
                    default:
                        break;
                }
            },
            getLocalStorage() {
                let vm = this
                vm.localStorageActive = true
                vm.tabModal = 'tab-localstorage'
                vm.refreshLocalData()
            },
            activateInterMinesTab() {
                let vm = this
                vm.interminesActive = true
                vm.tabModal = 'tab-intermines'
            },
            refreshLocalData() {
                let vm = this
                vm.localData = []
                for (let item in localStorage) {
                    if (item.substring(0, 2) === 'IM') {
                        let dataItem = JSON.parse(localStorage.getItem(item))
                        vm.localData.push(dataItem)
                    }
                }
            }
        }
    }
</script>