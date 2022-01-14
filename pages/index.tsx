import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import HeroSection from '../components/HeroSection'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Space tourism</title>
        <meta name="description" content="Space tourism" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroSection/>
      </main>
    </div>
  )
}
export default Home
