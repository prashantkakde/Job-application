import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute=({Component})=>{

    const navigate=useNavigate();

    useEffect(()=>{
        const token=Cookies.get("myToken");

        if(token===undefined){

            navigate("/login");
        }
    },[]);

    return <Component/>

}

export default ProtectedRoute;