import styles from './Categories.module.scss';

async function getCategories() {
    try {
        const response = await fetch("http://api.pizza-store.com/api/categories", { cache: "no-store" });
        const data = await response.json();
        return  data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default async function Categories() {
    const types = await getCategories();

    return (
        <div className={styles.categories}>
            <h1>Все пиццы</h1>
            <ul>
                {types.map((type) => (
                    <li key={type.id}>
                        <a href={`#${type.id}`} className={styles.link}>
                            {type.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

