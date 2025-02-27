import React from "react";
import Button from "@/modules/UI/Button";
import { ShoppingCart } from 'lucide-react';
import styles from './CartButton.module.scss'

function CartButton({className = "",...props}) {

    return(
        <Button
            type="button"
            aria-label="Cart"
            className={`${styles.cartButton} ${className}`}
            {...props}
        >
            <ShoppingCart  size={21} className={styles.shoppingCart} />
        </Button>
    )
}
export default CartButton;