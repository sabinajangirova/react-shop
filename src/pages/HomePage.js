import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import defaultPicture from "../picture.png"

export default function HomePage(){
    const products = useSelector((state) => state.cart.products)
    return (
        <div className="products-list">
            {
                products.map((product) => {
                    return (
                        <Link key={product.id} to={'/products/'+product.id}>
                            <div>
                                <img src={product.image ? product.image : defaultPicture} width="200" />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}