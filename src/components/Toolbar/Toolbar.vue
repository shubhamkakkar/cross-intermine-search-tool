<template>
    <v-app>
        <v-toolbar flat absolute dark app :clipped-left="clipped" id="toolbarBackground">
            <v-toolbar-side-icon @click.stop="DrawerToggle" />
            <v-toolbar-title>Cross InterMine Search Tool</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon class="hidden-xs-only">
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content class="mt-2">
            <Screen />
        </v-content>
    </v-app>
</template>

<script>
    import Screens from '@/components/Screens/Screens.vue'
    export default {
        name: "Toolbar",
        methods: {
            DrawerToggle() {
                let drawerToggle = this.$store.getters.drawerToggleGetter
                let drawerTogglePayload = undefined;
                drawerTogglePayload = !drawerToggle;
                this.$store.dispatch("drawerToggleAction", drawerTogglePayload)
            }
        },
        components: {
            Screens
        },
        data() {
            return {
                clipped: false,
            }
        }
    }
</script>

<style scoped>
    #toolbarBackground {
        background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);
    }
    
    @media only screen and (max-width: 600px) {
        .v-content {
            padding: 0 !important
        }
    }
</style>