import React from 'react';
import PizzaImage from "@/modules/MainPageContent/PizzaItem/components/PizzaImage/PizzaImage";
import styles from './PizzaItem.module.scss';

function PizzaItem(pizza){
    return(
        <div className={styles.pizzaItem}>
            <PizzaImage
                imageUrl={pizza.imageUrl}
                title={pizza.title}
                isCustomizable={pizza.isCustomizable}
                pizzaId={pizza.id}
            />
            <h3>{pizza.title}</h3>
            <p>{pizza.description}</p>
        </div>
    );
}
export default PizzaItem