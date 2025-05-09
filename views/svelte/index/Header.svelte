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
  <nav class="navbar navbar-expand-lg stricky fixed-top {RENDER !="index" ? "fondo":""} sps { y > navHeight ? "sps--blw":"sps--abv"} p-3 " id="minav" bind:clientHeight={navHeight}>
      <div class="container">
          <a class="navbar-brand" href="index.html">
              <!-- <p class="img_logo text-dark">Logo-LR</p> -->
              <img class="img_logo" src="images/logo/dark.png" alt="LeonardoRivara" />
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
      background-color: transparent !important;

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
      background-color: #409836;
      opacity: 0.9;
      transition-property: background-color;
      transition-duration: 1s;
      color: black !important; 
  }
  .sps--blw div a {
      color: black !important;
      text-shadow: none;
  }

  .sps--blw img{
      transform: translate(110px) scale(1.3,1.3);
      transition-duration: 0.8s;
  }

  .fondo{
      /* background-color: #ffd2ab !important; */
      background-color: #ededed !important;
  }

  .fondo .nav-link{
      color: black !important;
  }
  
  .nav-item{
      padding: 0;
  }

  .nav-link{
      color: white !important;
  }

  .nav-item:hover .nav-link {
      color: white !important;
      background-color: var(--ppal-color);
      border-radius: 3px;
  }

  .nav-link.fixed{
      background-color: var(--ppal-color);
      color: white !important;

      /* border: solid 3px var(--ppal-color) !important; */
      /* border: solid 3px var(--ppal-color) !important; */
      border-radius: 6px;
  }

  .nav-link.fixed:hover{
      background-color: var(--ppal-color-hover);
      color: black !important;

      /* border: solid 3px var(--ppal-color) !important; */
      /* border: var(--ppal-color) !important; */
      border-radius: 6px;
  }

  .carrito{
      margin-inline: 5px !important;
  }

  .navbar-brand{
      max-width:50%;
  }

  .img_logo{
      max-width:60%;
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

.dropdown-item{
  color: black !important; 
}

.dropdown-toggle::after {
  display: none;
  border-top: .3em solid transparent;
}

.dropdown-item:hover{
  color: black !important;
  background-color: rgba(255, 255, 255,0.5);
}

.collapse ul li a{
  padding-left: 8px;
  padding-right: 8px;
}

.dropdown-toggle{
  padding: 8px 0px 8px 0px;
}

.dropdown-menu{
  position: absolute;
  color: white !important;
}



</style>
