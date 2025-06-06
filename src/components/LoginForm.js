import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as styles from '../styles/LoginForm.module.css';
import dog from '../assets/dog-competition.png';

const LoginForm = () => {
    const [formData, setFromData] = useState({ username: '', password: '', remember: false });

    // name => username | password
    const handleChange = e => {
        setFromData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <form className={styles.form}>
            <section className={styles.formMainContent}>
                <section className={styles.dogImageContainer}>
                    <img src={dog} alt="Dog chasing a ball" className={styles.dogImage} />
                </section>
                <h2 className={styles.title}>Your Dream Dog Awaits</h2>
                <h6 className={styles.subtitle}>Please enter your details to sign in!</h6>
                <section className={styles.inputSectionContainer}>
                    <label htmlFor="username" className={styles.label}>Username or email address</label>
                    <input
                        className={styles.input}
                        type="text"
                        name="username"
                        value={formData.username}
                        placeholder="Username or email address"
                        onChange={handleChange}
                        autoFocus
                    />
                </section>
                <section className={styles.inputSectionContainer}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input
                        className={styles.input}
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="Password"
                        onChange={handleChange}
                        />
                </section>
                <section className={styles.inputMainOptions}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            name="remember"
                            checked={formData.remember}
                            onChange={(e) =>
                                setFromData((prev) => ({
                                    ...prev,
                                    remember: e.target.checked
                                }))
                            }
                            className={styles.checkbox}
                        />
                        Remember for 30 days
                    </label>
                    <a href="#" className={styles.label}>Forgot Password?</a>
                </section>
            </section>
            <section className={styles.formFooterContent}>
                <button type="submit" className={styles.formFooterSigninButton}>
                    Sign In
                </button>
                <label className={styles.formFooterLabel}>Don't have an account? <a href="#" className={styles.formFooterLink}>Create account</a></label>
            </section>
        </form>
    );
}

export default LoginForm;