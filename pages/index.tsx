import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Features from '../components/Features'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Trade from '../components/Trade'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crappo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Header />
        <About />
        <Trade />
        <Features />
      </main>
    </div>
  )
}

export default Home
