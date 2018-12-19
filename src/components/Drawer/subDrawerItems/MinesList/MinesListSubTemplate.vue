<template>
    <div>
        <v-list-tile v-for="(child, i) in neighbourhoods" :key="i" @click="changeNeighbourhoodChildFunction(child)">
            <v-list-tile-action>
                <v-icon color="blue-grey darken-1">image_search</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>
                    Only {{child}}
                </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </div>
</template>

<script>
    export default {
        name: "MinesListSubTemplate",
        props: ['neighbourhoods'],
        methods: {
            changeNeighbourhoodChildFunction(neighbourhood) {
                this.$emit("changeNeighbourhood", neighbourhood)
            },
        }
    }
</script>
