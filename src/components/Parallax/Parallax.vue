<template>
    <div>
        <div class="title-principal">
            <h1>{{title}}</h1>
            <p>{{description}}</p>
            <a v-if="section === 'home'" class="btn-action" href="#contact"> Contáctame </a>
        </div>
        <div class="parallax-container">
            <div v-if="imageToParallax" class="parallax">
                <img :src="urlBase+'images/'+imageToParallax.url_image">
            </div>
            
            <div v-else class="parallax">
                <img :src="urlBase+'images/no-image.png'">
            </div>
        </div>
    </div>
</template>
<script src="./Parallax.js"></script>
<style src="./Parallax.css" scoped></style>