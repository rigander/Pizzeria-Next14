import React, {useState, useEffect} from "react";
import styles from './PizzaTypes.module.scss'


function PizzaTypes() {
    const [types, setTypes] = useState([]);
    const [activeType, setActiveType] = useState({ id: "all", name: "Все пиццы" });

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await fetch("/api/pizza-types");
                const data = await response.json();
                setTypes([{ id: "all", name: "Все пиццы" }, ...data]);
            } catch (error) {
                console.error("Ошибка загрузки типов пиццы:", error);
            }
        };

        fetchTypes();
    }, []);

    const handleSelect = (type) => {
        setActiveType(type);
        onSelectType(type);
    };

    return(
        <div className={styles.pizzaTypes}>
            <h1>{activeType.name}</h1>
            <ul>
                {types.map((type) => (
                    <li key={type.id}>
                        <button
                            onClick={() => handleSelect(type)}
                            className={activeType?.id === type.id ? styles.active : styles.passive}
                        >
                            {type.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PizzaTypes;