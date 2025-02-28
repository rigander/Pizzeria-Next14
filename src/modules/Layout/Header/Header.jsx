import styles from './Header.module.scss'
import SearchInput from "@/modules/Layout/Header/components/SearchInput";
import Logo from "@/modules/Layout/Header/components/Logo";
import LoginButton from "@/modules/Layout/Header/components/LoginButton";
import CartButton from "@/modules/Layout/Header/components/CartButton";

function Header() {

    return(
        <header className={styles.header}>
            <div className={styles.headerContent}><Logo/>
                <SearchInput/>
                <LoginButton/>
                <CartButton/></div>
        </header>
    )
}
export default Header