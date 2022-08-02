<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/signup">Signup</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <router-link to="/logout">Logout</router-link>
    |
    <router-link to="/posts">Posts</router-link>
    |
    <router-link to="/posts/new">New Post</router-link>
  </nav> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">BLOGr</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li v-if="!isLoggedIn" key="" class="nav-item"></li>
          <a class="nav-link active" aria-current="page" href="/signup">Signup</a>
          <li v-if="!isLoggedIn" class="nav-item"></li>
          <a class="nav-link active" aria-current="page" href="/login">Login</a>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link active" aria-current="page" href="/logout">Logout</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/posts">Posts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/posts/new">New Posts</a>
          </li>
          <li class="nav-item"></li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  data: function () {
    return {
      isLoggedIn: false,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<style>
body {
  font-family: Futura;
  background-image: url(https://images.unsplash.com/photo-1550275994-cdc89cd1948f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80);
  background-size: cover;
}
</style>
