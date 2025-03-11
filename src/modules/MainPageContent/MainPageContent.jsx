import styles from "./MainPageContent.module.scss";
import Categories from "src/modules/MainPageContent/Categories";
import Banners from "@/modules/MainPageContent/Banners";
import PizzaList from "@/modules/MainPageContent/PizzaList";
import PizzaFilter from "src/modules/MainPageContent/PizzaFilter";

function MainPageContent() {
    return (
        <div className={styles.mainContent_Container}>
            <Categories />
            <Banners />
            <PizzaFilter />
            <PizzaList />
        </div>
    )
}
export default MainPageContent;