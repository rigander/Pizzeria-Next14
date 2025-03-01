import React from 'react';
import styles from './PizzaPrice.module.scss'


function PizzaPrice({ price }){

    return(
        <>
            <p className={styles.pizzaPricefrom}>от</p>
            <p className={styles.pizzaPrice}> {price} UH</p>
        </>
    )
}
export default PizzaPrice;