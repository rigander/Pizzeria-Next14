import React from "react";
import Button from "@/modules/UI/Button";
import { User } from 'lucide-react';
import styles from './LoginButton.module.scss'

function LoginButton({className = "",...props}) {

    return(
        <Button
            type="button"
            aria-label="Войти"
            className={`${styles.loginButton} ${className}`}
            {...props}
        >
            <User size={16} className={styles.user}/>
            <span>Войти</span>
        </Button>
    )
}
export default LoginButton;
