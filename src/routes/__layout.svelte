<script lang="ts">
  import "../app.css";
  import Header from "../components/Header.svelte";
  import SearchBar from "../components/SearchBar.svelte";
  import Nav from "../components/Nav.svelte";

  let search:boolean = false
  let nav:boolean = false
</script>

<SearchBar {search}/>
<Nav {nav}/>
<Header on:search="{() => search = !search}" on:nav="{() => nav = !nav}"/>
<slot />