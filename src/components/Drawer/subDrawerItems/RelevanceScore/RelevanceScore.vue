<template>
    <v-radio-group v-model="scoreFilter" @change="filterResults" id="relevanceBox">
        <v-list-tile>
            <v-list-tile-action>
                <v-icon color="blue-grey darken-1">star</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>
                    Relevance Score
                </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <div v-for="res in relevanceScoreObj" :key="res.value">
            <v-list-tile>
                <v-list-tile-action>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        <v-radio :ripple="false" :label="res.label" :value="res.value" color="blue-grey darken-1"></v-radio>
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </div>
    </v-radio-group>
</template>

<script>
    export default {
        name: "RelevanceScore",
        data() {
            return {
                scoreFilter: '1',
                relevanceScoreObj: [{
                        label: "4 stars & up",
                        value: "4"
                    },
                    {
                        label: "3 stars & up",
                        value: "3"
                    },
                    {
                        label: "2 stars & up",
                        value: "2"
                    },
                    {
                        label: "1 star & up",
                        value: "1"
                    }
                ]
            }
        },
        methods: {
            filterResults(data) {
                let vm = this
                if (!Array.isArray(data)) return data
                return data.filter((resultItem) => {
                    return (vm.calculateSearchPoints(resultItem.relevance) >= vm.scoreFilter) && (vm.categoryFilters.indexOf(resultItem.type) >= 0)
                })
            }
        }
    }
</script>

<style scoped>
    .v-input--selection-controls {
        margin-top: 0 !important;
        padding-top: 0 !important;
    }

    .v-input--selection-controls:not(.v-input--hide-details) .v-input__slot{
        margin-bottom: 0 !important;
    }

    label{
        font-size: 14px !important
    }
</style>