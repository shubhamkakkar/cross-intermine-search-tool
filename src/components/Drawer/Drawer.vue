<template>
    <v-navigation-drawer v-model="drawerModelComputed" :clipped="clipped" enable-resize-watcher app>
        <DefaultSubItems />
        <MinesList />
        <RelevanceScore />
        <CategoryFilter />
        <Documentation />
        <ChatWithUs />
        <FeatureTour />
    </v-navigation-drawer>
</template>

<script>
    import DefaultSubItems from "./subDrawerItems/DefaultSubItems/DefaultSubItems.vue"
    import MinesList from "./subDrawerItems/MinesList/MinesList.vue"
    import RelevanceScore from "./subDrawerItems/RelevanceScore/RelevanceScore.vue"
    import CategoryFilter from "./subDrawerItems/CategoryFilter/CategoryFilter.vue"
    import Documentation from "./subDrawerItems/Documentation/Documentation.vue"
    import ChatWithUs from "./subDrawerItems/ChatWithUs/ChatWithUs.vue"
    import FeatureTour from "./subDrawerItems/FeatureTour/FeatureTour.vue"
    
    export default {
        name: "Drawer",
        components: {
            DefaultSubItems,
            MinesList,
            CategoryFilter,
            RelevanceScore,
            Documentation,
            ChatWithUs,
            FeatureTour
        },
        props: ["drawerModel"],
        data() {
            return {
                clipped: false,
            }
        },
        computed: {
            drawerModelComputed: {
                get: function() {
                    return this.$store.getters.drawerToggleGetter
                },
                set: function(gettersValue) {
                    //nothing to be set
                }
            }
        },
    }
</script>

<style>
    .v-list__tile__title {
        font-size: 14px !important;
        font-weight: 40
    }
</style>