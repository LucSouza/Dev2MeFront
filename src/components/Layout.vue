<template>
  <div>
    <b-navbar class="navbar" type="dark" variant="dark">
      <b-navbar-brand to="/">
        <img
          src="../assets/logo.png"
          class="d-inline-block align-top"
          alt="VueFlix Logo" height="30"
        />
    
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/">Inicio</b-nav-item>
        <b-nav-item to="/Series">Series</b-nav-item>
        <b-nav-item to="/Movies">Filmes</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
 .navbar{background-color: #141414 !important}
</style>
