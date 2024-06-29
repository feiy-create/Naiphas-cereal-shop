import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "./../components/Homepage.vue"
import ContactUs from './../components/ContactUs.vue'
import ServicesOffered from '@/components/ServicesOffered.vue'
import Products from "./../components/Products.vue"
import AboutUs from "./../components/AboutUs.vue"
import Cart from "../components/Cart.vue"
const routes = [

    {

      path: '/',

      name: 'home',

      component: Homepage,

    },

{
    
          path: '/products',
    
          name: 'products',
    
          component: Products,
    
        },
        {
            
                  path: '/aboutus',
            
                  name: 'about',
            
                  component: AboutUs,
            
                },
                {
                    
                          path: '/contactus',
                    
                          name: 'contact',
                    
                          component: ContactUs,
                    
                        },
                            
                                    {
                                          path: '/servicesoffered',
                                    
                                          name: 'services',
                                    
                                          component: ServicesOffered,
                                    },
                                    {
                                        path: '/cart',
                                  
                                        name: 'cart',
                                  
                                        component: Cart,
                                    }
                                ]
                        
const router = createRouter({
  history: createWebHistory(),
  routes, 
})
export default router
