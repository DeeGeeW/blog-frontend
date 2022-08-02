<script>
export default {
  data: function () {
    return {
      message: "Home Page!",
    };
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
h1 {
  color: yellow;
}
</style>
