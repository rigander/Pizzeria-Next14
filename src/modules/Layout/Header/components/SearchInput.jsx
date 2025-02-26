"use client"

import React, {useState} from "react";
import Input from "@/modules/UI/Input";
import styles from './SearchInput.module.css';

function SearchInput() {



    return(
        <div className={styles.wrapper}>
            <Input/>
        </div>
    )
}

export default SearchInput