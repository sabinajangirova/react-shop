import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProducts: [],
    products: [
        {
            id:1,
            name:"Ramen",
            description:"Spicy noodle, fast food",
            price:1000,
            image:""
        },
        {
            id:2,
            name:"Milk",
            description:"Cow milk, very fresh",
            price:500,
            image:""
        },
        {
            id:3,
            name:"Tomatoes",
            description:"Red, fresh, from farm",
            price:800,
            image:""
        },
        {
            id:4,
            name:"Cookies",
            description:"Chocolate chip cookies",
            price:600,
            image:""
        },
        {
            id:5,
            name:"Water",
            description:"Crystal clear water",
            price:200,
            image:""
        }
      ]
  },
  reducers: {
    addProduct: (state, action) => {
      state.cartProducts = [...state.cartProducts, {...action.payload}]
    },
    removeProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter((element) => element.id != action.payload)
    },
    clearCart: (state) => {
      state.cartProducts = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, clearCart } = cartSlice.actions

export default cartSlice.reducer