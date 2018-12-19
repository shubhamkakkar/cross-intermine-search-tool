<template>
    <div>
        <v-list-tile v-for="(child, i) in selectIntermineschildren" :key="i">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>
                    <v-radio :ripple="false" v-model="selected" :label="child.text" color="blue-grey darken-1" :value="child" />
                </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </div>
</template>

<script>
    // study there shouldnbe an onclick listener for checkbox
    export default {
        name: "selectIntermineschildren",
        props: ["selectIntermineschildren", "selected"]
    }
</script>

<style scoped>
    label {
        font-size: 14px !important
    }
</style>