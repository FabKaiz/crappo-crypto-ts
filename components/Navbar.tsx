import Image from 'next/image'
import logo from '../public/assets/Logo.png'

const Navbar = () => {
  return (
    <div>
      Navbar
      <Image src={logo} alt="logo" />
    </div>
  )
}

export default Navbar