import picture from '../assets/Subject.png'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import logo from '../assets/react.svg'

const Home = () => {
  return (
    <div className='home-container'>
      {/* <Navbar /> */}
      <div className='heading-img-container'>
        <div className=' home-heading'>
          <div className='home-greeting'>Hi</div>
          <div className='home-sub-text'>myself</div>
          <div className='home-name'> Vivek</div>
        </div>
        <div className='image-bg-blue'>
          <img src={picture} alt='' />
        </div>
      </div>
      <div className='about-me-container'>
        <div className='react-container about-me-internal'>
          <img src={logo} alt='' />
          <div className='react-dev-heading about-me-heading'>
            A React.JS developer
          </div>
        </div>
        <div className='star-rating-container about-me-internal'>
          <div className='rating-stars'>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <div className='rating-heading about-me-heading'>
            3 star on Codechef
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
