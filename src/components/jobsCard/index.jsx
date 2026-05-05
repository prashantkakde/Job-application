import "./index.css";
import { FaStar } from "react-icons/fa";
import { FaLocationDot,FaBriefcase  } from "react-icons/fa6";
import { Link } from "react-router-dom";

//  {
//             "id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
//             "title": "Devops Engineer",
//             "rating": 4,
//             "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
//             "location": "Delhi",
//             "job_description": "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
//             "employment_type": "Internship",
//             "package_per_annum": "10 LPA"
//         },

const JobsCard=({jobsItem})=>{

 return(
    <Link to={`/jobs/${jobsItem.id}`}
    className="text-decoration-none ">
       
       <li className='p-3 rounded-lg shadow mb-4' style={{textDecoration:"none",color:"black",color:"white",backgroundColor:" rgb(113, 107, 107)"}}>
        <div className="d-flex">
            <img src={jobsItem.company_logo_url} width="80px"/>
            <div className="ms-2">
                <h3>{jobsItem.title}</h3>
                 <FaStar className="me-2" style={{color:"gold"}}/>
                <span>{jobsItem.rating}</span>
            </div>
        </div>

        <div className=" mt-4 d-flex justify-content-between align-items-center">
            <div >
              < FaLocationDot className="mr-1"/>
              <span>{jobsItem.location}</span>

              <FaBriefcase className="mr-1 ms-3"/>
              <span>{jobsItem.employment_type}</span>
            </div>

            <h4>{jobsItem.package_per_annum}</h4>
        </div>
        <hr/>

        <h4>Description</h4>

        <p>{jobsItem.job_description}</p>

    </li>
    </Link>

 )
}

export default JobsCard;