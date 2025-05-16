<script>
import { onMount } from 'svelte';

let isNavbarOpen = false;

let y=0 ,navHeight;

setTimeout(e=>{
    if (window.location.hash) {
        document.querySelector(window.location.hash).scrollIntoView({behavior: 'smooth'});
    }
},500);

onMount(() => {
    document.addEventListener('click', handleDocumentClick);
});

function handleDocumentClick(event) {
    const navbar = document.getElementById('navbar'); 
    if (navbar && !navbar.contains(event.target)) {
        isNavbarOpen = false;
    }
}

</script>

<svelte:window bind:scrollY={y} />

<!-- svelte-ignore missing-declaration -->
<nav class="navbar navbar-expand-lg stricky fixed-top {RENDER !="index" ? "fondo":""} sps { y > navHeight ? "sps--blw":"sps--abv"} p-2 " id="minav" bind:clientHeight={navHeight}>
    <div class="container">
        <a class="navbar-brand" href="index.html">
            <img class="img_logo" src="images/logo/dark.png" alt="meopp" />
        </a>
        <!-- svelte-ignore missing-declaration -->
        {#if RENDER!='formulario'}                
            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavDropdown" 
                aria-controls="navbarNavDropdown" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                on:click={() => isNavbarOpen = !isNavbarOpen}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown" class:show={isNavbarOpen} >
                <ul class="navbar-nav mx-auto">

                    <li class="nav-item carrito">
                        <a class="nav-link fixed" href="index.html?render=ingresar" role="button">
                            Inicio
                        </a>
                    </li>
                    <li class="nav-item carrito">
                        <a class="nav-link fixed" href="index.html?render=ingresar" role="button">
                            Protocolo
                        </a>
                    </li>
                    <li class="nav-item carrito">
                        <a class="nav-link fixed" href="index.html?render=ingresar" role="button">
                            Afiliaciones
                        </a>
                    </li>
                    <li class="nav-item carrito">
                        <a class="nav-link fixed" href="index.html?render=ingresar" role="button">
                            Salud
                        </a>
                    </li>
                    <li class="nav-item carrito">
                        <a class="nav-link fixed" href="index.html?render=ingresar" role="button">
                            <i class="bi bi-search"></i>
                        </a>
                    </li>
                </ul>
            </div>
        {/if}
    </div>
</nav>

<!-- svelte-ignore missing-declaration -->
{#if RENDER !="index"}
    <div class="espacio" style="height: {navHeight}px;"></div>
{/if}

<style>
.navbar-toggler {   
    background-color: white;
    opacity: 0.5;
}

.sps--abv {
    background-color: white !important;
    transition-property: background-color;
    transition-duration: 1s; 
    text-shadow: slategrey;
}

.sps--abv a{
    color: white;
}

.sps--abv img {
    transition-property: transform;
    transition-duration: 1s;
}

.sps--blw {
    background-color: #eff9d9;
    opacity: 0.95;
    transition-property: background-color;
    transition-duration: 1s;
}
.sps--blw div a {
    text-shadow: none;
}

.sps--blw img{
    transform: translate(110px) scale(1.3,1.3);
    transition-duration: 0.8s;
}

.fondo{
    background-color: #ededed !important;
}

.fondo .nav-link{
    color: black !important;
}

.nav-item{
    padding: 0;
}

.nav-link{
    transition-duration: 300ms;
}

.nav-item:hover .nav-link {
    border-radius: 3px;
}

.nav-link.fixed{
    position: relative;
    color: #2e380d !important;
    font-weight: bold;
    border-radius: 6px;
    text-transform: uppercase;
}

.nav-link.fixed:hover{
    color: #6ea000 !important;
    border-radius: 6px;
}

.nav-link.fixed::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background-color: currentColor;
    transition: width 0.2s ease-in-out;
}

.nav-link.fixed:hover::after {
    width: 100%;
}

.carrito{
    margin-inline: 5px !important;
}

.navbar-brand{
    max-width:50%;
}

.img_logo{
    max-width:200px;
}

.social-icons ul li {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-block;
}

.social-icons ul li:first-child a {
    border-left: 1px solid #EAEAEA;
}

.social-icons ul li a {
    display: inline-block;
    font-size: 15px;
    color: #A4A4A4;
    border-right: 1px solid #EAEAEA;
    line-height: 48px;
    text-align: center;
    padding: 0 16px;
    margin-left: -5px;
    transition: all .3s ease;
}

.social-icons ul li a:hover {
    color: #fff;
    background-color: #186AAB;
} 

@media (max-width: 991px) {
    ul li {
        display: inline;
    }

    li a:hover {
        color: #000;
    }
}

a {
    text-decoration: none;
}

.navbar-toggler{
    padding: 5px;
    background: transparent;
    border: none;
}

li{
    padding: 8px;
}

.collapse ul li a{
    padding-left: 8px;
    padding-right: 8px;
}
</style>
