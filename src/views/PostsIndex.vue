<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Posts",
      posts: [],
    };
  },
  created: function () {
    this.postsIndex();
  },
  methods: {
    postsIndex() {
      axios.get("/posts").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1 id="page-title">{{ message }} count: {{ posts.length }}</h1>
    <div v-for="post in posts" v-bind:key="post.user_id">
      <h3>{{ post.title }}</h3>
      <p>Body: {{ post.body }}</p>
      <router-link v-bind:to="`/posts/${post.id}`">
        <img v-bind:src="post.image" v-bind:alt="post.title" style="max-width: 250px" />
      </router-link>
    </div>
  </div>
</template>

<style></style>
