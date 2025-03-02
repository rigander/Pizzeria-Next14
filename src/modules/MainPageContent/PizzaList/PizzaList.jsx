import React from "react";
import styles from './PizzaList.module.scss'
import PizzaItem from "@/modules/MainPageContent/PizzaItem/PizzaItem";

function PizzaList() {

    return(
        <div className={styles.pizza_list}>
            <PizzaItem />
        </div>
    )
}
export default PizzaList;