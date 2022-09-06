import './navbar.css';
import logo from "../../assets/logomica.png"




function Navbar() {




    return (
      <div className="navbar"> 
        <div className="title">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
    );
  }
  
  export default Navbar;