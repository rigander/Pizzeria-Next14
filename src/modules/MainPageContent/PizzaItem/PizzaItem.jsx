import React from 'react';
import PizzaImage from "@/modules/MainPageContent/PizzaItem/components/PizzaImage/PizzaImage";
import PizzaDescription from "@/modules/MainPageContent/PizzaItem/components/PizzaDescription";
import PizzaPrice from "@/modules/MainPageContent/PizzaItem/components/PizzaPrice";
import PizzaTitle from "@/modules/MainPageContent/PizzaItem/components/PizzaTitle";
import PizzaActions from "@/modules/MainPageContent/PizzaItem/components/PizzaActions";
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
            <PizzaTitle title={pizza.title} />
            <PizzaDescription description={pizza.description} />
            <PizzaPrice price={pizza.price}/>
            <PizzaActions />
        </div>
    );
}
export default PizzaItem