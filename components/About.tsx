import styles from '../styles/About.module.scss'
import { FaChartBar, FaUserAlt } from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'
import aboutImg from '../public/assets/aboutImg.png'
import Image from 'next/image'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <section className={`${styles.aboutContainer} sectionContainer`}>
      <div className={styles.aboutTop}>
        <AboutCard
          logo={<FaChartBar />}
          title="$30B"
          description="Digital Currency Exchanged"
        />
        <AboutCard
          logo={<FaUserAlt />}
          title="10M+"
          description="Trusted Wallets Investor"
        />
        <AboutCard
          logo={<BiWorld />}
          title="195"
          description="Countries Supported"
        />
      </div>
      <div className={styles.aboutBottom}>
        <div className={styles.aboutImg}>
          <Image src={aboutImg} alt="about" />
        </div>
        <div className={styles.aboutText}>
          <h2>Why you should choose CRAPPO</h2>
          <p>
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default About
