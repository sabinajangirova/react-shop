import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProduct } from "../features/cart/cartSlice";
import defaultPicture from "../picture.png"

export default function ProductPage(){
    const { id } = useParams()
    const product = useSelector((state) => state.cart.products.find((element) => element.id == id))
    const dispatch = useDispatch()

    const handleAddToCart = function(){
        dispatch(addProduct(product))
    }
    return (
        <>
            <div>
                <img src={product.image ? product.image : defaultPicture} width="200" />
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
                <p>{product.description}</p>
            </div>
            <button onClick={handleAddToCart} >Add to cart</button>
        </>
    )
}