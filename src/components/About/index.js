import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const lightThemeAboutImg =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
const darkThemeAboutImg =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const aboutBgClassName = isDarkTheme
          ? 'dark_about_bg'
          : 'light_about_bg'
        const aboutImage = isDarkTheme ? darkThemeAboutImg : lightThemeAboutImg
        const aboutClassName = isDarkTheme
          ? 'light_about_heading'
          : 'dark_about_heading'
        return (
          <div className={aboutBgClassName}>
            <img src={aboutImage} alt="about" className="about_img" />
            <h1 className={aboutClassName}>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
