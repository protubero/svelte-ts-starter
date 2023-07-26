<script lang="ts">
  import Router, { link } from "svelte-spa-router";
  import { routes } from "./routes.js";
  import { onMount } from "svelte";
  import { DarkMode } from "flowbite-svelte";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'

  /*
  let data;
  async function fetchData() {
    const response = await fetch(import.meta.env.VITE_API_ENDPOINT);
    data = await response.json();
  }
  onMount(fetchData);
  */
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="#/about">About</NavLi>
    <NavLi href="#/articles">Articles</NavLi>
    <NavLi href="#/todos">Todos</NavLi>
    <NavLi href="#/contact">Contact</NavLi>
  </NavUl>
  <DarkMode />
</Navbar>


<div class="p-8 overflow-hidden bg-gray-50 dark:bg-gray-900">
  
  <Router {routes} />
<!--
  {#if data}
    <p>Data:</p>
    <ul>
      {#each Object.entries(data) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
    </ul>
  {/if}-->
  </div>
