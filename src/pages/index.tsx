import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '../components/Layout';

import { FiArrowRight } from 'react-icons/fi';

import styles from '../styles/pages/Landing.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Landing | Chef.it</title>
      </Head>

      <div className={styles.landingContainer}>
        <div className={styles.content}>
          <div>
            <h2>Share your favorite cooking recipes</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque corrupti ut sed odit praesentium accusantium iusto. Velit voluptatibus, molestiae adipisci aspernatur reprehenderit aliquid veritatis facere saepe et sit voluptatem!
            </p>
          </div>
         
          <div className={styles.buttons}>
            <Link href="/app">
              <button className={styles.accessPlatform}>
                Access the platform
                <FiArrowRight size={32} />
              </button>
            </Link>
            
            <Link href="/signup">
              <button className={styles.signup}>
                I don't have an account
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img src="/assets/donut.svg" alt="Donut Image" />
        </div>
      </div>
    </Layout>
  )
}
