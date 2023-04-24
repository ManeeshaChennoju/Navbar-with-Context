import Navbar from '../Navbar'
import './index.css'

const notFoundUrl = 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'

const NotFound = () => (
  <>
    <Navbar />
    <div className="not_found_container">
      <img className="not_found_img" src={notFoundUrl} alt="not found" />
      <h1 className="light_heading">Lost Your Way</h1>
      <p className="light_para">
        We cannot seem to find the page you looking for.
      </p>
    </div>
  </>
)

export default NotFound
