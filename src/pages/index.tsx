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
        
      </div>
    </Layout>
  )
}
