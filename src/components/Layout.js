import React from 'react';
import { Outlet } from 'react-router-dom';
import * as styles from '../styles/Layout.module.css';

const Layout = () => {
    return (
        <section className={styles.container}>
            <main>
                <Outlet />
            </main>
        </section>
    );
};

export default Layout;