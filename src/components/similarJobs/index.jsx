import { FaStar} from "react-icons/fa";
import { FaLocationDot,FaBriefcase  } from "react-icons/fa6";

const SimilarJobs=(  {similar_jobs})=>{
      
         return(
            <div >
                <h2 style={{marginLeft:"200px",color:"white"}}>Similar Jobs</h2>
                <ul className="container d-flex  flex-wrap  justify-content-evenly w-100" >
              
           {similar_jobs.map(job => (
          <li key={job.id} className=' p-3 rounded-lg shadow mb-4 ' style={{ listStyle:"none" ,textDecoration:"none",color:"black",width:"30%",color:"white", backgroundColor:" rgb(113, 107, 107)"}}>
                <div className="d-flex w-100">
                                 <img src={job.company_logo_url}width="80px"/>
                                 <div className="ms-2">
                                     <h3>{job.title}</h3>
                                      <FaStar className="me-2" style={{color:"gold"}}/>
                                     <span>{job.rating}</span>
                                 </div>
                                 </div>
         
                                  <div className=" mt-4 d-flex justify-content-between align-items-center">
                                             <div >
                                               < FaLocationDot className="mr-1"/>
                                               <span>{job.location}</span>
                                 
                                               <FaBriefcase className="mr-1 ms-3"/>
                                               <span>{job.employment_type}</span>
                                             </div>
                                 
                                             <h4>{job.package_per_annum}</h4>
                                 </div>
                               
         
                                   <h4>Description</h4>
                                   <p>{job.job_description}</p>
                     </li>  
                      
          ))}
         
        </ul>
    </div>

    )
   
}

export default SimilarJobs;