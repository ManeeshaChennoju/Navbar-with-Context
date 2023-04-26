import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const lightThemeHomeImg =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
const darkThemeHomeImg =
  'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const homeBgClassName = isDarkTheme ? 'dark_home_bg' : 'light_home_bg'
        const homeImage = isDarkTheme ? darkThemeHomeImg : lightThemeHomeImg
        const HeadingClassName = isDarkTheme
          ? 'light_home_heading'
          : 'dark_home_heading'
        return (
          <div className={homeBgClassName}>
            <img src={homeImage} alt="home" className="Home_img" />
            <h1 className={HeadingClassName}>Home</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Home
