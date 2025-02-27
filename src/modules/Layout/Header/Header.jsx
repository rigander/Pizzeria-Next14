import styles from './Header.module.css'
import SearchInput from "@/modules/Layout/Header/components/SearchInput";
import Logo from "@/modules/Layout/Header/components/Logo";

function Header() {

    return(
        <header className={styles.header}>
            <Logo />
            <SearchInput />
        </header>
    )
}
export default Header