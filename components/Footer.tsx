import styles from '../styles/Footer.module.scss'
import Image from 'next/image'

import logo from '../public/assets/logo.png'
import visaLogo from '../public/assets/footerVisa.png'
import mastercardLogo from '../public/assets/footerMastercard.png'
import bitcoinLogo from '../public/assets/footerBitcoin.png'

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={`${styles.footerContainer} sectionContainer`}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogo}>
          <Image src={logo} alt="logo" />
        </div>

        <div className={styles.footerLinks}>
          <h5>Quick Link</h5>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerLinks}>
          <h5>Resources</h5>
          <ul>
            <li>
              <a href="#">Download Whitepapper</a>
            </li>
            <li>
              <a href="#">Smart Token</a>
            </li>
            <li>
              <a href="#">Blockchain Explorer</a>
            </li>
            <li>
              <a href="#">Crypto API</a>
            </li>
            <li>
              <a href="#">Interest</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerPaymentLinks}>
          <h3>We accept following payment systems</h3>
          <div className={styles.footerPaymentLogo}>
            <Image src={visaLogo} alt="visa logo" />
            <Image src={mastercardLogo} alt="mastercard logo" />
            <Image src={bitcoinLogo} alt="bitcoin logo" />
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerCopyright}>
          <p>©2021 CRAPPO. All rights reserved</p>
        </div>

        <div className={styles.footerSocial}>
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  )
}

export default Footer
