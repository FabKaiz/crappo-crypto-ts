import Image from 'next/image'
import logo from '../public/assets/Logo.png'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div>
        <Image src={logo} alt="logo" />
      </div>

      <div className={styles.navLinksContainer}>
        <div className={styles.navLinks}>
          <ul>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.navBtns}>
          <a className={styles.loginBtn}>Login</a> |{' '}
          <button className={styles.registerBtn}>Register</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
