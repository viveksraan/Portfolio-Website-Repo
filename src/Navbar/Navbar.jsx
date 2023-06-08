import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <Link to='/' className='nav-item' id='nav-home'>
        Home
      </Link>
      <Link to='/portfolio' className='nav-item' id='nav-portfolio'>
        Portfolio
      </Link>
      {/* <a className='nav-item' id='nav-name' href='#' target='_blank'> */}
      {/* Vivek */}
      {/* </a> */}
      {/* <a className='nav-item' id='nav-home' href='#' target='_blank'> */}
      {/* Home */}
      {/* </a> */}
      {/* 
      <a className='nav-item' id='nav-portfolio' href='#' target='_blank'>
        Portfolio
      </a> */}
    </div>
  )
}
export default Navbar
