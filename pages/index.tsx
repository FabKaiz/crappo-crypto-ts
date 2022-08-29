import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Trade from '../components/Trade'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crappo</title>
        <meta name="description" content="Fastest & secure platform to invest in crypto, Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Header />
        <About />
        <Trade />
        <Features />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}

export default Home
