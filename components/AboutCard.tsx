import styles from '../styles/AboutCard.module.scss'

type AboutProps = {
  logo: React.ReactNode
  title: string
  description: string
}

const AboutCard: React.FC<AboutProps> = ({ logo, title, description }) => {
  return (
    <div className={styles.aboutCardContainer}>
      <div className={styles.aboutCardLogo}>{logo}</div>
      <div className={styles.aboutCardText}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default AboutCard
