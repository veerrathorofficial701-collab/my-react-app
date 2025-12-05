import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      < div className="wrap">
      <div className="logo"><Link to="/">
      <img src="img/logo/logo.png" alt="" />
      </Link>
        </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cta">How it Works</Link></li>
          <li><Link to="/testimonials">Solutions</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </nav>

      <button className="btn btn-primary">Login</button>
      </div>
    </header>
  );
}
