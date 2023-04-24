import Navbar from '../Navbar'
import './index.css'

const lightThemeHomeImg =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
const darkThemeHomeImg =
  'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <>
    <Navbar />
    <div className="Home_container">
      <img src={lightThemeHomeImg} alt="home" className="Home_img" />
      <h1 className="home_heading">Home</h1>
    </div>
  </>
)

export default Home
