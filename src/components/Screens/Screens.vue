<template>
    <div>
        <RootViewComponent v-if="RootViewComponentComputed" />
        <!-- <SavedItems v-if="SavedItemsComputed" />
        <Intermines v-if="InterminesComputed" /> -->
    </div>
</template>

<script>
    import RootViewComponent from "@/components/RootViewComponent/RootViewComponent.vue"
    // import Intermines from "@/components/Intermines/Intermines.vue"
    // import SavedItems from "@/components/SavedItems/SavedItems.vue"
    
    export default {
        name: "Screens",
        components: {
            RootViewComponent,
            // Intermines,
            // SavedItems
        },
        computed: {
            RootViewComponentComputed() {
                return this.$store.getters.RootViewComponentGetters
            },
            SavedItemsComputed() {
                return this.$store.getters.SavedItemsGetters
            },
            InterminesComputed() {
                return this.$store.getters.InterminesGetters
            }
        }
    }
</script>