import styles from '../styles/Header.module.scss'
import headerImg from '../public/assets/headerImg.png'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={`${styles.headerContainer} sectionContainer`}>
      <div className={styles.headerLeft}>
        <div className={styles.headerOffer}>
          <span>75% SAVE</span>
          <p>For the Black Friday weekend</p>
        </div>
        <h1 className={styles.headerTitle}>
          Fastest & secure platform to invest in crypto
        </h1>
        <p className={styles.headerSubtitle}>
          Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
          billion in transactions.
        </p>
          <button className={styles.headerButton}>
            Try for Free
            <span>&gt;</span>
          </button>

      </div>
      <div className={styles.headerRight}>
        <Image src={headerImg} alt="Crappo logo" />
      </div>
    </header>
  )
}

export default Header
