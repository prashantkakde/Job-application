import { Routes,Route } from "react-router-dom";
import Home from "./components/home";
import Jobs from "./components/job";
import Login from "./components/login";
import NotFound from "./components/notFound";
import ProtectedRoute from "./components/protectedRoute";
import JobsItemDetails from "./components/jobsItemDetails";



const App =()=>{

  return (

    <Routes>
           
           <Route path="/" element={<ProtectedRoute Component={Home}/>}></Route>

           <Route path="/login" element={<Login/>}></Route>

           <Route path="/Jobs" element={<ProtectedRoute Component={Jobs}/>}></Route>

             <Route path="/Jobs/:id" element={<ProtectedRoute Component={JobsItemDetails}/>}></Route>

           <Route path="/*" element={<NotFound/>}></Route>


    </Routes>
  )
}

export default App;