<template>
    <v-app-bar :elevation="2" color = "blue">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>Camel Shop</v-app-bar-title>
  <v-btn to ="/">Home</v-btn>
<v-btn to="/products">Products</v-btn>
<v-btn to="/AboutUs">AboutUs</v-btn>
<v-btn to="/ContactUs">ContactUs</v-btn>
<v-btn to="/ServicesOffered">ServicesOffered</v-btn>
<v-btn to="/Cart">Cart</v-btn>
</v-app-bar>
    
</template>