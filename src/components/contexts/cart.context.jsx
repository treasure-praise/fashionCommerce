import { useState,createContext } from "react";

export const CartContext= createContext({
    isCartOpen:true,
    setIsOpen:()=>{

    }
})

export const CartProvider =({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(true)
    const value = {isCartOpen,setIsCartOpen}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
