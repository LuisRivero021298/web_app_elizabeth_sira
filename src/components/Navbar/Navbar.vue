<template>
    <div>
        <nav>
            <div class="nav-wrapper">
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><ion-icon name="menu"></ion-icon></a>
                
                <ul id="nav-mobile" class="hide-on-med-and-down table-of-contents">
                    <div>
                        <li v-if="route != '/'"><router-link to="/">Home</router-link></li>
                        <li v-else><a href="#home">Home</a></li>
                    </div>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about" >About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="logo-container">
                <img src="/e-icon-nav.png" alt="logo" class="brand-logo">
            </div>
        </nav>
        <ul class="sidenav" id="mobile-demo"> <!-- Responsive!-->
            <div>
                <li v-if="route != '/'"><router-link to="/">Home</router-link></li>
                <li v-else><a href="#home">Home</a></li>
            </div>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="badges.html">Contact</a></li>
        </ul>
    </div>
</template>

<script src="./Navbar.js"></script>
<style src="./Navbar.css" scoped></style>