import Link from 'next/link';

import styles from '../styles/components/Header.module.css';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <section className={styles.logo}>
                <Link href="/">
                    <button>
                        <img src="/assets/chef.svg" alt="Chef.it Icon" />
                        <span>Chef.it</span>
                    </button>
                </Link>
            </section>
            <section className={styles.buttons}>
                <button>
                    Login
                </button>
                
                <button>
                    Sign Up
                </button>
            </section>
        </header>
    );
}