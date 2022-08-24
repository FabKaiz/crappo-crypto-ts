import styles from '../styles/Newsletter.module.scss'

const Newsletter = () => {
  return (
    <section className={`${styles.newsletterContainer} sectionContainer`}>
      <div className={styles.newsletterBox}>
        <div className={styles.newsletterTop}>
          <h2>Star mining now</h2>
          <p>
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>

        <div className={styles.newsletterBottom}>
          <input type="text" placeholder="Enter your email" />
          <button className={`mainButton ${styles.newsletterBtn}`}>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
