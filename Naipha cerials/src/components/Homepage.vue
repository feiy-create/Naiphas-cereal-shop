<script>
export default {
  data()  {
    return {
      image:  '../public/cerialpic1.jpeg',
      url: 'https://www.vuejs.org/',
      stockdetails  : [
      {
                itemNumber: 1,
                itemName : "crumpets",
                itemPrice : 200,
                itemQuantity : 150,
                itemImage: 'Naipha cerials/public/cerialpic2.jpg'
            },
            {
                itemNumber: 2,
                itemName : "foam squares",
                itemPrice : 500,
                itemQuantity : 400,
                itemImage: 'Naipha cerials/public/cerial pic3.jpeg'
            },
              {
                itemNumber: 3,
                itemName : "waffle balls",
                itemPrice : 100,
                itemQuantity : 600,
                itemImage: 'Naipha cerials/public/cerial pic4.jpg' 
            },
            {
              itemNumber: 4,
                itemName : "cheerios",
                itemPrice : 1000,
                itemQuantity : 700,
                itemImage: 'Naipha cerials/public/cerial pic5.jpeg'
            },
            {
              itemNumber: 5,
                itemName : "quisp&quake",
                itemPrice : 600,
                itemQuantity : 800,
                itemImage: 'Naipha cerials/public/cerial pic6.jpeg'
            },
            {itemNumber: 6,
                itemName : "toast crunch",
                itemPrice : 200,
                itemQuantity : 400,
                itemImage:'Naipha cerials/public/cerial pic7.png'

            }

      ] 

    }
  },
  methods(){
   //add functions 
  },
  computed()  {
    //forms
  }
}
</script>

<template> 
<!--caroussel-->
  <v-card
    class="mx-auto"
    width="700"
  >

    <v-carousel>
  <v-carousel-item
    src="Naipha cerials\public\images\cerialpic1.jpeg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="Naipha cerials\public\images\cerial pic5.jpeg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="Naipha cerials\public\images\cerial pic7.png"
    cover
  ></v-carousel-item>
</v-carousel>
  </v-card>
  <v-card align="center">
        <v-card-item>
          <v-card-title>Welcome to  Naipha Cereal Shop</v-card-title>

          <v-card-subtitle>Your one stop for  any type of cereal  you crave for</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Welcome to Naiphas cerial shop, where every visit is a journey into a world of amaizing cerials!
           Step inside and discover a wonderland filled with a colorful array of cerials from around the globe.
      Our friendly staff are here to guide you through our selection, 
      offering samples and recommendations to ensure your experience is as delightful as our products.
At Naiphas cerials , we believe in quality, variety, and the joy of indulgence. 
Whether you're treating yourself or looking for the perfect gift, 
our beautifully packaged cerials make every occasion better.
 From birthdays to weddings, our cerial creations add a touch of whimsy and flavor to any celebration.
Join us at Naiphas Cerial Shop, where happiness comes in every cerial!


        </v-card-text>
      </v-card>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <h3 class="text-center">What Our Customers Say</h3>
      <v-divider></v-divider>
  <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="love your services"
        text= "I love your products,they are original  and amaizing"
        title="Amaizing offers"
      ></v-card>

      <div class="text-center text-caption">Our pleasure</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          Great  tastes 
        </template>

        <template v-slot:subtitle>
         Received order on time
        </template>

        <template v-slot:text>
          "Amazing customer service! The staff here are so friendly and helpful. 
          They really know their cerials and are great at recommending new ones to try.

        </template>
      </v-card>
      <div class="text-center text-caption">Our pleasure</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>Very affordable</v-card-title>

          <v-card-subtitle>Wide  varieties</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          "A delightful shopping  experience  every time. 
          Definitely my go-to place for satisfying cravings."

        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Our pleasure</div>
    </v-col>
  </v-row>
</template>
