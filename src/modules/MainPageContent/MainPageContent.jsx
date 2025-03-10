import styles from "./MainPageContent.module.scss";
import Categories from "src/modules/MainPageContent/Categories";
import PizzaList from "@/modules/MainPageContent/PizzaList";
import PizzaFilter from "src/modules/MainPageContent/PizzaFilter";

function MainPageContent() {
    return (
        <div className={styles.mainContent_Container}>
            <Categories />
            <PizzaFilter />
            <PizzaList />
        </div>
    )
}
export default MainPageContent;