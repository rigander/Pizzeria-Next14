import styles from './Header.module.css'
import SearchInput from "@/modules/Layout/Header/components/SearchInput";

function Header() {

    return(
        <header className={styles.header}>
            <SearchInput />
        </header>
    )
}
export default Header