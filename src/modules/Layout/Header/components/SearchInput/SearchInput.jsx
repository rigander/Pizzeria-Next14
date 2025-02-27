"use client"

import React, {useState} from "react";
import Input from "@/modules/UI/Input";
import { Search } from 'lucide-react';
import styles from './SearchInput.module.scss';

function SearchInput() {
    const [query, setQuery] = useState("");

    return(
        <div className={styles.searchWrapper}>
            <div className={styles.inputWrapper}>
                <Search className={styles.searchIcon} size={16} />
                <Input
                    className={styles.searchInput}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Поиск пиццы..."
                />
            </div>
        </div>
    )
}

export default SearchInput