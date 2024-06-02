import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import AddProduct from "../views/AddProduct.vue";
import ProductDetail from "../views/ProductDetail.vue";
import NotFound from "../views/NotFound.vue";
import Cookies from "js-cookie";

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
        beforeEnter: (to, from, next) => {
            if (!Cookies.get('token')) next()
            else next('/')
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        beforeEnter: (to, from, next) => {
            if (!Cookies.get('token')) next()
            else next('/')
        }
    },
    {
        path: "/add-product",
        name: "AddProduct",
        component: AddProduct,
        beforeEnter: (to, from, next) => {
            if (Cookies.get('token')) next()
            else next('/login?error=You need to login first')
        },
    },
    {
        path: "/product/:id",
        name: "ProductDetail",
        component: ProductDetail,
        beforeEnter: (to, from, next) => {
            if (Cookies.get('token')) next()
            else next('/login?error=You need to login first')
        },
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