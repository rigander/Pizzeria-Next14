import React from "react";
import styles from './PizzaTitle.module.scss'

function PizzaTitle({ title }) {

    return(
        <h3 className={styles.pizzaTitle}>{title}</h3>
    )
}
export default PizzaTitle;