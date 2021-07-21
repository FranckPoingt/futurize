import React from 'react';
import Logo from '../components/Logo';

import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo />
        </div>
    )
}

export default Header
