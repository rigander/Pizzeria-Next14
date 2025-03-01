import React from "react";
import Link from "next/link";
import { Settings2 } from 'lucide-react';
import styles from './PizzaImage.module.scss'

function PizzaImage({ imageUrl, title, isCustomizable, pizzaId }){

    return(
        <Link href={`/pizza/${pizzaId}`} className={styles.pizza}>
            {isCustomizable && <Settings2 className={styles.settings} />}
            <img className={styles.image} src={imageUrl} alt={title}/>
        </Link>
    );
}
export default PizzaImage;