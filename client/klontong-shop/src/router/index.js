import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import AddProduct from "../views/AddProduct.vue";
import ProductDetail from "../views/ProductDetail.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/add-product",
        name: "AddProduct",
        component: AddProduct,
    },
    {
        path: "/product/:id",
        name: "ProductDetail",
        component: ProductDetail,
    },
    // Catchall 404
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;