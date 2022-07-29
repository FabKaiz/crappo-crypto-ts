import Image from 'next/image'
import logo from '../public/assets/Logo.png'
import styles from '../styles/Navbar.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className={styles.navContainer}>
      <div className={styles.imgContainer}>
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
        <GiHamburgerMenu
          onClick={() => setToggleMenu(!toggleMenu)}
          className={styles.burgerMenuBtn}
        />

        {toggleMenu && (
          <div className={styles.navMenu}>
            <ul>
              <li>
                <a href="#" onClick={() => setToggleMenu(!toggleMenu)}>
                  Login
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setToggleMenu(!toggleMenu)}>
                  Register
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
