const  state = {
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
const getters = {
    stock: (state) => state.stockdetails,

}
const actions = {

}
const  mutations  ={

}
export default {
    state,
    getters,
    actions,
    mutations
}