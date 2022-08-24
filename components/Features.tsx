import styles from '../styles/Features.module.scss'
import featuresChart1 from '../public/assets/featuresChart1.png'
import featuresChart2 from '../public/assets/featuresChart2.png'
import featuresTable from '../public/assets/featuresTable.png'
import Image from 'next/image'

const Features = () => {
  return (
    <section className={`${styles.featuresContainer} sectionContainer`}>
      <h2 className={styles.featuresSectionTitle}>
        Market sentiments, portfolio, and run the infrastructure of your choice
      </h2>

      <div className={styles.featureContainer}>
        <div className={styles.featureText}>
          <h3>Invest Smart</h3>
          <p>
            Get full statistic information about the behaviour of buyers and
            sellers will help you to make the decision.
          </p>
          <button className={`mainButton`}>Learn More</button>
        </div>
        <div className={styles.featureImg}>
          <Image src={featuresChart1} alt="features chart" />
        </div>
      </div>

      <div
        className={`${styles.featureContainer} ${styles.featureContainerReverse}`}
      >
        <div className={styles.featureText}>
          <h3>Detailed Statistics</h3>
          <p>
            View all mining related information in realtime, at any point at any
            location and decide which polls you want to mine in.
          </p>
          <button className={`mainButton`}>Learn More</button>
        </div>
        <div className={styles.featureImg}>
          <Image src={featuresChart2} alt="features chart" />
        </div>
      </div>

      <div className={styles.featureContainer}>
        <div className={styles.featureText}>
          <h3>Grow your profit and track your investments</h3>
          <p>
            Use advanced analytical tools. Clear TradingView charts let you
            track current and historical profit investments.
          </p>
          <button className={`mainButton`}>Learn More</button>
        </div>
        <div className={styles.featureImg}>
          <Image src={featuresTable} alt="features table" />
        </div>
      </div>
    </section>
  )
}

export default Features
