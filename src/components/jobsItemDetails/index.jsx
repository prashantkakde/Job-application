import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FaStar} from "react-icons/fa";
import { FaLocationDot,FaBriefcase  } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import Navbar from "../navbar";
import SimilarJobs from "../similarJobs";


//     "job_details": {
//         "id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
//         "title": "Devops Engineer",
//         "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
//         "company_website_url": "https://about.netflix.com/en",
//         "rating": 4,
//         "location": "Delhi",
//         "package_per_annum": "10 LPA",
//         "job_description": "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
//         "skills": [
//             {
//                 "name": "Docker",
//                 "image_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png"
//             },
//             {
//                 "name": "Kubernetes",
//                 "image_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/kubernetes-img.png"
//             },
//             {
//                 "name": "Terraform",
//                 "image_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/terraform-img.png"
//             },
//             {
//                 "name": "Jenkins",
//                 "image_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/jenkins-img.png"
//             },
//             {
//                 "name": "GO",
//                 "image_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/go-img.png"
//             },
//             {
//                 "name": "Ansible",
//                 "image_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/ansible-img.png"
//             }
//         ],
//         "life_at_company": {
//             "description": "Our core philosophy is people over process. Our culture has been instrumental to our success. It has helped us attract and retain stunning colleagues, making work here more satisfying. Entertainment, like friendship, is a fundamental human need, and it changes how we feel and gives us common ground. We want to entertain the world.",
//             "image_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/life-netflix-img.png"
//         },
//         "employment_type": "Internship"
//     },
//     "similar_jobs": [
//         {
//             "id": "2b40029d-e5a5-48cc-84a6-b6e12d25625d",
//             "title": "Frontend Engineer",
//             "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
//             "location": "Delhi",
//             "employment_type": "Freelance",
//             "job_description": "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
//             "rating": 4
//         },
//         {
//             "id": "3cc666e5-23a5-4981-ade2-61115f95ac0b",
//             "title": "Frontend Engineer",
//             "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
//             "location": "Mumbai",
//             "employment_type": "Part Time",
//             "job_description": "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
//             "rating": 5
//         },
//         {
//             "id": "96e1ddb6-930c-4ca4-a80e-998ce410c6cf",
//             "title": "Frontend Engineer",
//             "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
//             "location": "Bangalore",
//             "employment_type": "Freelance",
//             "job_description": "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
//             "rating": 4
//         }
//     ]
// }


const JobsItemDetails=()=>{

      const{id}=useParams();

    const[allValues,setValues]=useState({
        jobDetails:{},
        skills:[],
        life_at_company:{},
        employment_type:"",
        similar_jobs:[]

    })

    useEffect(() => {
    const fetchJobDetails = async () => {
        const api = `https://apis.ccbp.in/jobs/${id}`;
        const token = Cookies.get("myToken");

        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        try {
            const response = await fetch(api, options);
            const data = await response.json();

            if (response.ok) {
               setValues({...allValues, jobDetails: data.job_details,
                    skills: data.job_details.skills,
                    life_at_company: data.job_details.life_at_company,
                    employment_type: data.job_details.employment_type,
                    similar_jobs: data.similar_jobs})
            }

            //  console.log(data.job_details);

     } catch (error) {
            console.log(error);
        }
    };

    fetchJobDetails(); 

}, [id]);


  
 
   const { jobDetails, skills, life_at_company,similar_jobs} = allValues;

return (
    <div style={{backgroundColor:" #4b4848"}} >
          <Navbar/>
         
   
        <div className="container d-flex justify-content-center mt-5 " >
          
            
           
            <li className=' p-3 rounded-large shadow mb-4 ' style={{ listStyle:"none" ,textDecoration:"none",color:"black",width:"900px",backgroundColor:" rgb(113, 107, 107)",color:"white"}}>
             <div className="d-flex w-100">
                        <img src={jobDetails.company_logo_url}width="80px"/>
                        <div className="ms-2">
                            <h3>{jobDetails.title}</h3>
                             <FaStar className="me-2" style={{color:"gold"}}/>
                            <span>{jobDetails.rating}</span>
                        </div>
                        </div>

                         <div className=" mt-4 d-flex justify-content-between align-items-center">
                                    <div >
                                      < FaLocationDot className="mr-1"/>
                                      <span>{jobDetails.location}</span>
                        
                                      <FaBriefcase className="mr-1 ms-3"/>
                                      <span>{jobDetails.employment_type}</span>
                                    </div>
                        
                                    <h4>{jobDetails.package_per_annum}</h4>
                        </div>
                         <hr/>
                            
                          <div className="d-flex justify-content-between align-items-center w-100">   
                         <h4 >Description</h4>
                         <a href={jobDetails.company_website_url} target="_blank" style={{textDecoration:"none"}} ><b>Visit <FiExternalLink className="ms-1" /></b></a>
                         </div>

                         <p>{jobDetails.job_description}</p>
                       

                          
            <h3>Skills</h3>
            <ul style={{ listStyle:"none", display: "flex",justifyContent:"space-evenly", flexWrap: "wrap" }}>
                {skills.map(skill => (
                    <li key={skill.name} style={{ margin: "10px" }}>
                        <img src={skill.image_url} width="40px" />
                        <p>{skill.name}</p>
                    </li>
                ))}
            </ul>

            
              <h3>Life at Company</h3>
             <div className="d-flex">
            <p>{life_at_company.description}</p>
            <img src={life_at_company.image_url} width="300px" />
            </div>
            </li>  

             
        </div>
         <SimilarJobs similar_jobs={similar_jobs} />
     </div>  
);

}



export default JobsItemDetails;
