<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Posts",
      posts: [],
      currentPost: {},
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
  <div class="home row">
    <h1 class="m-3">{{ message }} count: {{ posts.length }}</h1>
    <div
      class="col"
      v-bind:class="{ selected: post === currentPost }"
      v-for="post in posts"
      v-bind:key="post.id"
      v-on:mouseover="currentPost = post"
    >
      <div class="card" style="width: 18rem">
        <img v-bind:src="post.image" class="card-img-top" v-bind:alt="post.title" />
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <!-- <p class="card-text">Body: {{ post.body }}</p> -->
          <a v-bind:href="`/posts/${post.id}`" class="btn btn-primary">More Info</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.selected .card-body {
  color: orangered;
  background-color: aqua;
  margin: 10px;
  /* padding: 5px; */
}
img {
  height: 250px;
  object-fit: cover;
  /* margin: 10px; */
}
.card {
  margin: 10px;
}
</style>
