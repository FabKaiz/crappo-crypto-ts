import styles from '../styles/Trade.module.scss'
import TradeCard from './TradeCard'
import btcLogo from '../public/assets/btcLogo.png'
import ethLogo from '../public/assets/ethLogo.png'
import ltcLogo from '../public/assets/ltcLogo.png'

const Trade = () => {
  return (
    <section className={styles.tradeContainer}>
      <div className={styles.tradeTop}>
        <div className={styles.tradeTopText}>
          <h2>Check how much you can earn</h2>
          <p>
            Let’s check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className={styles.tradeTopCalculate}>
          <form className={styles.calculateForm}>
            <input type="text" placeholder="Enter your hash rate" />
            <select name="TH/s" id=""></select>

            <button>Calculate</button>
          </form>
          <div className={styles.calculateRevenue}>
            <h5>ESTIMATED 24 HOUR REVENUE:</h5>
            <h3>
              0.055 130 59 ETH <span>($1275)</span>
            </h3>
            <p>
              Revenue will change based on mining difficulty and Ethereum price.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.tradeBottom}>
        <h2>Trade securely and market the high growth cryptocurrencies.</h2>
        <div className={styles.tradeCardsContainer}>
          <TradeCard
            logo={btcLogo}
            title={'Bitcoin'}
            abbreviations={'BTC'}
            description={
              'Digital currency in which a record of transactions is maintained.'
            }
            active={true}
          />
          <TradeCard
            logo={ethLogo}
            title={'Ethereum'}
            abbreviations={'ETH'}
            description={
              'Blockchain technology to create and run decentralized digital applications.'
            }
            active={false}
          />
          <TradeCard
            logo={ltcLogo}
            title={'Litecoin'}
            abbreviations={'LTC'}
            description={
              'Cryptocurrency that enables instant payments to anyone in the world.'
            }
            active={false}
          />
        </div>
      </div>
    </section>
  )
}

export default Trade
