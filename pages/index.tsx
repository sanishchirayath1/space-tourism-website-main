import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Space tourism</title>
        <meta name="description" content="Space tourism" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroSection/>
      </main>
    </Layout>
  )
}
export default Home
