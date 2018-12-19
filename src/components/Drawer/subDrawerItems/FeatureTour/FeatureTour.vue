<template>
    <v-list-tile @click="tabModal='tab-home'" id="tourBtn">
        <v-list-tile-action>
            <v-icon color="blue-grey darken-1">help</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>
                Feature Tour
            </v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
    import {
        tabModal
    } from "@/mixins/mixins.js"
    export default {
        name: "FeatrueTour",
        mixins: [tabModal]
    }
</script>