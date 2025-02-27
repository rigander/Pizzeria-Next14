import styles from './Header.module.scss'
import SearchInput from "@/modules/Layout/Header/components/SearchInput";
import Logo from "@/modules/Layout/Header/components/Logo";
import LoginButton from "@/modules/Layout/Header/components/LoginButton";

function Header() {

    return(
        <header className={styles.header}>
            <Logo />
            <SearchInput />
            <LoginButton />
        </header>
    )
}
export default Header