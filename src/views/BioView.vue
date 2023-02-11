<template>
    <div>
        <v-container>
            <company-bio-component></company-bio-component>
        </v-container>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import CompanyBioComponent from '@/components/CompanyBioComponent.vue'
    import FooterComponent from '@/components/FooterComponent.vue'
    export default {
        components:{
            FooterComponent,
            CompanyBioComponent
        }
    }
</script>
