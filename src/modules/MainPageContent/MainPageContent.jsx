import styles from "./MainPageContent.module.scss";
import PizzaList from "@/modules/MainPageContent/PizzaList";
import PizzaTypes from "@/modules/MainPageContent/PizzaTypes";
import PizzaFilter from "src/modules/MainPageContent/PizzaFilter";

function MainPageContent() {
    return (
        <div className={styles.mainContent_Container}>
            <PizzaTypes />
            <PizzaFilter />
            <PizzaList />
        </div>
    )
}
export default MainPageContent;