import {
    createApp
} from 'vue';
import {
    createRouter,
    createWebHistory
} from 'vue-router';
import BaseSearch from './components/UI/BaseSearch.vue';
import BaseContainer from './components/UI/BaseContainer.vue';
import App from './App.vue';
import AllProducts from './pages/AllProducts.vue';
import ProductDetails from './pages/ProductDetails.vue';
import AddProduct from './pages/AddProduct.vue';
const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            redirect: '/products'
        },
        {
            path: '/products',
            component: AllProducts
        },
        {
            path: '/products/:pid',
            component: ProductDetails
        },
        {
            path: '/products/add',
            component: AddProduct
        }
    ]
});
app.component('base-search', BaseSearch);
app.component('base-container', BaseContainer);


app.use(router);

app.mount('#app');