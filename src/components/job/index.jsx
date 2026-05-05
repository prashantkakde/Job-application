import "./index.css";
import JobsCard from "../jobsCard";
import JobsFilter from "../jobsFilter";
import Cookies from "js-cookie";
import Navbar from "../navbar";
import { useEffect, useState } from "react";


const Jobs =()=>{

    const[allValues,setvalues]=useState({
        jobsArr :[],
        empType:[],
        sallry:"",
        userIn:""

    });

useEffect(()=>{
    const fetchJobs=async ()=>{
        const{empType,sallry,userIn}=allValues;

        // console.log(empType);
       
        const api=`https://apis.ccbp.in/jobs?employment_type=${empType}&minimum_package=${sallry}&search=${userIn}`;
        const token=Cookies.get("myToken");

        const options={
           method:"Get",
           headers:{
             Authorization:`Bearer ${token}`
           }
        }

        try{
            const response=await fetch(api,options);
            const data= await response.json();

            // console.log(data.jobs);

           if(response.ok){
            setvalues({...allValues,jobsArr:data.jobs});
           }


        }catch(error){

        }
    }

    fetchJobs();

},[allValues.userIn,allValues.empType,allValues.sallry]);

const onChangeUserIn=(e)=>{

    if(e.key==="Enter"){
        setvalues({...allValues,userIn:e.target.value});
    }

}

function onChangeEmpType(value,isChecked){
     if(isChecked){
        setvalues({...allValues,empType:[...allValues.empType,value]});
     }
     else{
        setvalues({...allValues,empType:allValues.empType.filter(e=>e !==value)});
     }

}

function onChangeSallry(value){
  setvalues({...allValues,sallry:value});
}


    return (
        <div style={{ backgroundColor:" #4b4848",color:"white"}}>
            
        <Navbar/>
       <div className="w-100 text-center  d-flex justify-content-center">
         <input  onKeyUp={onChangeUserIn}  type="text" className="form-control w-50 mt-3" placeholder="search your job....."/>
       </div>
       <div className='container'>
            <div className='row'>
                <div className='col-4 p-3'>
                    <JobsFilter onChangeEmpType={onChangeEmpType} onChangeSallry={onChangeSallry}/>
                </div>

                <ul style={{listStyle:"none"}} className='col-8 p-3'>
                    {
                        allValues.jobsArr.map(each =><JobsCard key={each.id} jobsItem={each}/>)
                    }
                </ul>
            </div>
       </div>
        </div>

    )
}

export default Jobs; 