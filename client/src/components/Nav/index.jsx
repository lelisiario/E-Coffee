import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import e_coffee from "../../assets/e-coffee.png";
import './nav.css'

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row"> 
          <p className="mx-1 my-1">
            <Link to="/cart">
              Cart
            </Link>
          </p>
          <p className="mx-1 my-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </p>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <p className="mx-1 my-1">
            <Link to="/signup">
              Signup
            </Link>
          </p>
          <p className="mx-1 my-1">
            <Link to="/login">
              Login
            </Link>
          </p>
        </ul>

      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
        <div className="image">
          <img src={e_coffee} alt="e-coffee logo" style={{ width: '40px', height: '40px' }} />
        </div>
        
          
        </Link>
        
      </h1>
      <Link to="/">
      <div className="coffee">
        -Coffee
        </div>
      </Link>
      <nav className="navbar">
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
