import React from "react";
import styles from './PizzaDescription.module.scss'

function PizzaDescription({description}) {

    return(
        <p className={styles.description}>{description}</p>
    )
}
export default PizzaDescription;