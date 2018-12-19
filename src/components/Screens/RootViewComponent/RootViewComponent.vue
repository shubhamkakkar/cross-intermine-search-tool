<template>
    <v-container fluid>
        <v-card class="card-rounded padding-635mm">
            <v-card-title>
                <v-layout row wrap>
                    <v-flex xs12 class=" headline color-headline text-align-center ">
                        Cross InterMine Search Tool
                    </v-flex>
                </v-layout>
            </v-card-title>
            <v-card-text>
                <v-layout row wrap>
                    <v-flex xs12 text-align-center class="line-height-change color-content ">
                        InterMine is a data warehouse system for biological research. There are around 30+ instances of InterMine all around the world. InterMines consist of huge datasets of biological and genetic data. Earlier, if a person wanted to search for a gene in multiple
                        InterMines, he/she had no other choice than going to every InterMine portal and do the search. It was very difficult for a person to manage so many portals simultaneously and compare the results and filter them to get the required
                        items. This whole process of searching and exploring InterMine data can be simplified by the use of Cross InterMine Search Tool.
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-flex xs12 class="text-align-center my-4 ">
                    <v-btn raised round color="#24b47e " dark class="mx-2 " @click='pushRoute("/home ")'>Proceed</v-btn>
                    <v-btn raised round color="rgb(103, 114, 229) " dark class="mx-2 " @click='pushRoute("/docs ")'>Guide</v-btn>
                </v-flex>
            </v-card-actions>
            <v-flex xs12 justify-center class="mt-4 ">
                <v-img src="http://lh3.googleusercontent.com/Sq0fc5iIoxtpDIqlvRNLY3vtfPKAM-KWobdZl4I60P4K-dOMldXEijOP7sA40Vkm2Og9YfG1vPyVdYds6nzI0t0aVFm11jGK=h128 " max-height="200px " contain>
                </v-img>
            </v-flex>
        </v-card>
    </v-container>
</template>

<script>
    import {
        NavigationFunction
    } from "@/mixins/mixins.js"
    import "@/commonStyleClasses.css";
    export default {
        name: "RootViewComponent",
        mixins: [NavigationFunction]
    }
</script>

<style scoped>
    #home-componet-parent {
        background-color: #F5F5F5;
        height: 100vh;
        display: flex;
        justify-content: center;
    }
    
    .card-rounded {
        border-radius: 20px;
        box-shadow: 4px 4px 12px #ccc;
    }
    
    .line-height-change {
        line-height: 1.8
    }
    
    .color-headline {
        color: rgb(36, 180, 126);
    }
    
    .color-content {
        color: rgb(82, 95, 127);
    }
</style>