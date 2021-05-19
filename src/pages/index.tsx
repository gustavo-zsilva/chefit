import Head from 'next/head'
import Image from 'next/image'

import { Header } from '../components/Header';
import { Layout } from '../components/Layout';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Landing | Chef.it</title>
      </Head>

      <div className={styles.landingContainer}>
        <div>
          <h2>Share your favorite cooking recipes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque corrupti ut sed odit praesentium accusantium iusto. Velit voluptatibus, molestiae adipisci aspernatur reprehenderit aliquid veritatis facere saepe et sit voluptatem!
          </p>
        </div>

        <div>
          <img src="/assets/donut.svg" alt="Donut Image" />
        </div>
      </div>
    </Layout>
  )
}
