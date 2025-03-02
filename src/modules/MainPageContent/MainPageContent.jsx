import styles from "./MainPageContent.module.scss";
import PizzaList from "@/modules/MainPageContent/PizzaList";

function MainPageContent() {
    return (
        <div className={styles.container}>
            <PizzaList />
        </div>
    )
}
export default MainPageContent;