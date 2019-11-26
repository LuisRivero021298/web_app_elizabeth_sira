<template>
    <div class="portfolio">
        <div v-for="work in filterOrderDesc" :key="work.id" class="image-container" 
        :class="{'hideClass' : work.id > 3}">
            <img :src="urlBase+'images/'+work.image_work" alt="">
        </div>
    </div>
</template>

<script src="./Portfolio.js"></script>
<style src="./Portfolio.css" scoped></style>