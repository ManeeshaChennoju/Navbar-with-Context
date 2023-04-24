import {Link} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const lightThemeLogo =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
const darkThemeLogo =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
const lightThemeButton =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
const darkThemeButton =
  'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const navbarBgclassname = isDarkTheme ? 'dark_nav_bg' : 'light_nav_bg'
          const navLogoImg = isDarkTheme ? lightThemeLogo : darkThemeLogo
          const ulItemsClass = isDarkTheme ? 'light_nav_item' : 'dark_nav_items'
          const themeButton = isDarkTheme ? lightThemeButton : darkThemeButton

          return (
            <nav className={`navbar_container ${navbarBgclassname}`}>
              <img
                className="website_logo"
                src={navLogoImg}
                alt="website logo"
              />
              <ul className="ul_items">
                <Link to="/" className="link_item">
                  <li className="ul_items_class">Home</li>
                </Link>
                <Link to="/about" className="link_item">
                  <li className="ul_items_class">About</li>
                </Link>
              </ul>
              <button
                className="theme_button"
                type="button"
                data-testid="theme"
                onClick={this.toggleTheme}
              >
                <img className="theme_image" src={themeButton} alt="theme" />
              </button>
            </nav>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
