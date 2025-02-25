import { createRouter, createWebHistory } from "vue-router";
import Index from "../Views/Index.vue";

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;