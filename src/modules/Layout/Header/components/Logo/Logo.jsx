import Image from "next/image";
import Link from "next/link";
import styles from './Logo.module.scss'

function Logo() {

    return(
        <Link href="/" className={styles.logoContainer}>
                <Image src="/logo.png" alt="Logo Next Pizza" width={35} height={35} />
                <div>
                    <span className={styles.nextPizza}>NEXT PIZZA</span>
                    <span className={styles.tastesWell}>вкусней уже некуда</span>
                </div>
        </Link>
    )
}
export default Logo