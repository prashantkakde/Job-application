import "./index.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar";


const Home =()=>{

  return(
    <div className="Home">
      
      <Navbar/>

      <br/><br/><br/>
      
      <div className="p-4">
         <h1 style={{width:"400px"}}>Find your dream job and explore it with your expertise...</h1>

         <br/><br/>
          
          <Link to="/jobs" style={{width:"200px"}} className="btn btn-primary"> Explore More</Link>
          
      </div>
   </div>

  ) 
}

export default Home;