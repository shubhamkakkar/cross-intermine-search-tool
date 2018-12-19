<template>
    <v-list-tile :href="'http://' + host + '/docs'" target="_blank">
        <v-list-tile-action>
            <v-icon color="blue-grey darken-1">book</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>
                Documentation
            </v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
    export default{
        name: "Documenation"
    }
</script>