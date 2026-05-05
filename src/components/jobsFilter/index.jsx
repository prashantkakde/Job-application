import "./index.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const empArr=[

    {
        id:"FULLTIME",
        title:"Full Time"
    },
    {
        id:"PARTTIME",
        title:"Part Time"
    },
     {
        id:"INTERNSHIP",
        title:"Internship"
    },
     {
        id:"FREELANCE",
        title:"Freelance"
    },

]
const sallryRangeArr=[

    {
        id:"1000000",
        title:"10LPA & Above"
    },
    {
        id:"2000000",
        title:"20LPA & Above"
    },
     {
        id:"3000000",
        title:"30LPA & Above"
    },
     {
        id:"4000000",
        title:"40LPA & Above"
    },

]

const JobsFilter=({onChangeEmpType,onChangeSallry})=>{

    const[allValues,setValues]=useState({
        profile:{}
    })

     useEffect(()=>{

        const fetchProfile=async()=>{

            const api="https://apis.ccbp.in/profile";
            const token=Cookies.get("myToken");

            const options={
                method:"Get",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }

            try{
                const response=await fetch(api,options);
                const data=await response.json();

                if(response.ok){

                    setValues({...allValues,profile:data.profile_details})
                }

                // console.log(data.profile_details);

            }catch(error){
                console.log(error);
            }
        }
       
        fetchProfile();
    },[])

    const displayProfile=()=>{
          
        const {profile}=allValues;
        
        return(

            <div className="w-100 p-3 shadow " style={{backgroundColor:"pink"}} >

                <img src={profile.profile_image_url} width="70px"/>
                <h3>{profile.name}</h3>
                <p>{profile.short_bio}</p>
          </div>
               
        )
    
    }


const displayEmpFilter=()=>{

    return(
        <ul style={{listStyle:"none",backgroundColor:"#4b4848"}} className="w-100 p-3 ">
            {
                empArr.map(each=>(

                    <li key={each.id}>
                        <input  onChange={(e)=>{onChangeEmpType(e.target.value,e.target.checked)}} className="me-2" type="checkbox" id={each.id} value={each.id}/>
                        <label htmlFor={each.id}>{each.title}</label>
                    </li>
                ))
            }

        </ul>
    )

}

const displaySallryFilter=()=>{

    return(
        <ul style={{listStyle:"none",backgroundColor:" #4b4848"}} className="w-100 p-3 ">
            {
                sallryRangeArr.map(each=>(

                    <li key={each.id}>
                        <input  onChange={(e)=>{onChangeSallry(e.target.value)}} name="sallry" className="me-2" type="radio" id={each.id} value={each.id} />
                        <label htmlFor={each.id}>{each.title}</label>
                    </li>
                ))
            }

        </ul>
    )

}



    return(
        <div>
            {displayProfile()}
            <hr/>
            <h3>Employment Type:</h3>
            {displayEmpFilter()}
             <hr/>
            <h3>Sallry Range:</h3>
            {displaySallryFilter()}
        </div>
    )
}

export default JobsFilter;