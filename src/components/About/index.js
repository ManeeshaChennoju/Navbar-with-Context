import Navbar from '../Navbar'
import './index.css'

const lightThemeAboutImg =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
const darkThemeAboutImg =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <>
    <Navbar />
    <div className="about_container">
      <img src={lightThemeAboutImg} alt="about" className="about_img" />
      <h1 className="about_heading">About</h1>
    </div>
  </>
)

export default About
