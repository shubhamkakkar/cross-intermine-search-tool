<template>
    <div>
        <v-list-tile id="categoryBox">
            <v-list-tile-action>
                <v-icon color="blue-grey darken-1">view_list</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>
                    Category Filter
                </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    
        <v-list-tile @click="selectAllNoneCategories" v-show="category.length != 0">
            <v-list-tile-action>
                <v-icon color="blue-grey darken-1">done_all</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>
                    Select All / None
                </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    
        <v-list-tile v-if="category.length == 0">
            <v-list-tile-action>
                <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>
                    --EMPTY--
                </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    
        <v-list-tile v-if="category.length != 0" v-for="(categoryItem, i) in category" :key="i">
            <v-list-tile-action>
                <v-icon :style="{ color: selectColor(categoryItem)}">layers</v-icon>
            </v-list-tile-action>
    
            <v-list-tile-content>
                <v-list-tile-title>
                    <v-checkbox :ripple="false" v-model="categoryFilters" :label="categoryItem" :value="categoryItem" color="blue-grey darken-1"></v-checkbox>
                </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </div>
</template>

<script>
    export default {
        name: "CategoryFiler",
        data() {
            return {
                category: [],
                categoryFilters: [],
            }
        },
        methods: {
            selectAllNoneCategories() {
                let vm = this
                if (vm.toggleSelectCategory) {
                    vm.categoryFilters = []
                } else {
                    vm.categoryFilters = []
                    vm.category.map((item) => {
                        vm.categoryFilters.push(item)
                    })
                }
                vm.toggleSelectCategory = !vm.toggleSelectCategory
            }
        }
    }
</script>