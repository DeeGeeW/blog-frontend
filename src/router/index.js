import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import PostIndex from "../views/PostsIndex.vue";
import PostNew from "../views/PostNew.vue";
import PostShow from "../views/PostsShow.vue";
import PostEdit from "../views/PostEdit.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  { path: "/signup", name: "signup", component: SignupView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
  { path: "/posts", name: "post", component: PostIndex },
  { path: "/posts/new", name: "posts-new", component: PostNew },
  { path: "/posts/:id", name: "posts-show", component: PostShow },
  {
    path: "/posts/:id/edit",
    name: "posts-edit",
    component: PostEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
