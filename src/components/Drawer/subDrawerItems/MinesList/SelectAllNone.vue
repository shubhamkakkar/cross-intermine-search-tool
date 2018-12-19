<template>
    <v-list-tile @click="selectAllChildrenFunction">
        <v-list-tile-action>
            <v-icon color="blue-grey darken-1">done_all</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>
                Select All / None
            </v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
    export default {
        name: "selectAllNone",
        methods: {
            selectAllChildrenFunction() {
                this.$emit("selectAllFunction")
            }
        }
    }
</script>