<template>
    <h1>cereals</h1>
    <v-card
    class="mx-auto"
    width="800">
    <v-card-text class="bg-surface-light pt-4">
        <v-card-title>cart
            {{ total }}
            <v-btn
            color="blue"
            text="Checkout">
        </v-btn>
        </v-card-title>
        <v-row>
            <v-col cols="12"md="4" v-for="product in cartItems" :key=product>
                <v-card
                class="mx-auto my-12"
                max-width="374">
            <v-img
        height="250"
    :src="product.itemImage"
cover>
</v-img>
<v-card-item>
    <v-card-title>{{ product.itemImage }}</v-card-title>
</v-card-item>
<v-card-text>
    <div class="my-4 text subtitle-1">{{ product.itemPrice }}</div>
</v-card-text>
<v-divider class="mx-4 mb-1"></v-divider>
<v-card-actions>
    <v-btn
    color="blue"
    text="Remove"
    block
    border>
</v-btn>
</v-card-actions>
</v-card>
</v-col>
        </v-row>
    </v-card-text>
</v-card>
    <div>
        <v-row>
            <v-col cols="12" md="4" v-for="product in stock":key=product>
                </v-col>
        </v-row>
    </div>
    <v-card
    class="mx-auto my-12"
    max-width="374">
    <v-img>
        height="250"
        :src="product.itemImage"
        cover
    </v-img>
    
    <v-card-item>
        <v-card-title>{{product.itemName}}</v-card-title>
    </v-card-item>
    <v-card-text>
        <div class="my-4  text-subtitle-1">price</div>
        <div>{{ product.description }}</div>
    </v-card-text>
    <v-divider class="mx-4 mb-1"></v-divider>
    <v-card-actions>
        <v-btn
        color="blue"
        text="Add to cart"
        block
        border>
//v-on directive
        @click="addToCart(product)"
    </v-btn>
    </v-card-actions>
    </v-card>
</template>
<script>
import { mapActions,mapGetters } from 'vuex';
export default {
data(){
    methods: {
        calculateTotal(itemPrice)
        {
            this.total += itemPrice
        }
        addToCart(product)
        {
            this.cartItems.push(product)
            this.calculateTotal(product.itemPrice)
        }
    }
   
    return{

          }
        },
        methods:{
            ...mapActions([
                "addToCart"
            ])
},
computed: {
        ...mapGetters({
            stock:'stock'
        })
    },
}
</script>