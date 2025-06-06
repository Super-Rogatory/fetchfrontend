import React from 'react';
import { Outlet } from 'react-router-dom';
import * as styles from '../styles/Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.container}>
            <main  >
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;