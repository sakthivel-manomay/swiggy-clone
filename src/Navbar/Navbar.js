import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Swiggy</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#offers">Offers</a></li>
          <li><a href="#help">Help</a></li>
          <li><a href="#account">Account</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;