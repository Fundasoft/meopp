<script>
  import { onMount } from "svelte";

  export let titulo = "", menu = [];

  let nav, navbarSideCollapse;

  function clickMenuNav() {
    navbarSideCollapse.click();
    Array.from(nav.getElementsByClassName("active")).map((h) => {
      h.classList.remove("active");
    });
    this.classList.add("active");
  }

  function logout() {
    fetch("logout", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then((response) => response.json())
      .then((exit) => {
        if (exit) window.location = "index.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  onMount(() => {

    nav.item = function (item) {
      menu = menu.concat(item);
    };

  });
</script>

<header class="fixed-tope">
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href={"#"} class="navbar-brand d-flex align-items-center">
        <img
          src="/images/logo/favicon.svg"
          alt="logo"
          style="max-width: 30px;margin-right: 10px;"
        />
        <strong>{titulo}</strong>
      </a>
      <div>
        <button on:click={logout} class="btn btn-info" style="margin-right: 8px;">Cerrar sesion</button>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#myOffcanvasIzq"
        >
          <span class="navbar-toggler-icon" />
        </button>
      </div>
    </div>
  </div>
</header>

<div
  class="offcanvas offcanvas-start bg-dark text-light"
  tabindex="-1"
  id="myOffcanvasIzq"
  aria-labelledby="myOffcanvasIzqLabel"
>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="myOffcanvasIzqLabel">Menu</h5>
    <button
      bind:this={navbarSideCollapse}
      type="button"
      class="btn btn-icon btn-lg"
      data-bs-dismiss="offcanvas"
    >
      <i class="bi bi-x text-light" />
    </button>
  </div>
  <div class="offcanvas-body">
    <nav bind:this={nav} class="bg-dark" data-cen="menu">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column" style="--bs-nav-link-color: white;">
          {#each menu as item}
            <li class="nav-item">
              <a class="nav-link {item.active ? 'active' : ''}" aria-current="page" href={"#"} on:click={clickMenuNav} on:click={item.callback}>
                <i class="bi bi-{item.ico} text-light" /> {item.titulo || 'caca'}
                {#if item.new}
                  <span class="badge text-bg-danger" style="margin-left: 10px;">new</span>
                {/if}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </nav>

  </div>
</div>
