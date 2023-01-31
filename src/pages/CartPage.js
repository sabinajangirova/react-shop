import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../features/cart/cartSlice";
import defaultPicture from "../picture.png"

export default function CartPage(){
    // const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cart')))
    const cartProducts = useSelector((state) => state.cart.cartProducts)
    console.log(cartProducts)
    const dispatch = useDispatch()
    const handleRemove = function(id){
        dispatch(removeProduct(id))
    }

    let totalPrice = 0
    for(const product of cartProducts){
        totalPrice += product.price
    }

    return (
        <>
            {
                cartProducts.map((product) =>{
                    return (
                        <div key={product.id}>
                            <div>
                                <img src={product.image ? product.image : defaultPicture} width="200" />
                                <h3>{product.name}</h3>
                            </div>
                            <button onClick={() => handleRemove(product.id)} >Remove from cart</button>
                        </div>
                    )
                })
            }
            <h2>{totalPrice}</h2>
        </>
    )
}