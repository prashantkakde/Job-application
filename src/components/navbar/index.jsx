import { Link } from "react-router-dom";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "../../assets/logo.png";

const Navbar=()=>{
    const navigate = useNavigate();

     const onLogout = () => {
     Cookies.remove("myToken");
     navigate("/login");
  };
 
    return (
        <nav>

           <Link to="/" className="logo-container">
            <img src={logo} alt="logo" />
             </Link>

             <ul  className="my-nav p-3">
                <li className="me-4"  >
                    <Link to="/" style={{color:"white",textDecoration:"none"}}>Home</Link>
                </li>

                <li>
                    <Link to="/Jobs" style={{color:"white",textDecoration:"none"}}>Jobs</Link>
                </li>
                <li>
               <Link to="/login" onClick={onLogout}  className="btn btn-primary ">Logout</Link>
              </li>
             </ul>

             
            
        </nav>
    )
}

export default Navbar;