import Image, { StaticImageData } from 'next/image'
import styles from '../styles/TradeCard.module.scss'
import { AiOutlineRight } from 'react-icons/ai'

type TradeProps = {
  logo: string | StaticImageData
  title: string
  abbreviations: string
  description: string
  active: boolean
}

const TradeCard: React.FC<TradeProps> = ({
  logo,
  title,
  abbreviations,
  description,
  active,
}) => {
  return (
    <div className={`${styles.tradeCardContainer} ${active ? styles.darkBg : styles.lightBg}`}>
      <Image loading="lazy" src={logo} alt={`${title} logo`} />
      <h2>{title} <span>{abbreviations}</span></h2>
      <p>{description}</p>
      {active ? (
        <button className="mainButton">
          Start mining <AiOutlineRight />
        </button>
      ) : (
        <button className={styles.buttonRight}>
          <AiOutlineRight />
        </button>
      )}
    </div>
  )
}

export default TradeCard
