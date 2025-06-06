import React from "react";
import * as styles from '../styles/LoginPage.module.css';
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <section className={styles.container}>
            <section className={styles.imagePanelContainer}>
                <span>Hi</span>
            </section>
            
            <section className={styles.loginFormContainer}>
                <LoginForm />
            </section>
        </section>
    );
};

export default LoginPage;