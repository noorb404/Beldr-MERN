import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';
import JobsList from '../../user/Profile/components/JobsList';

//showing first 3 open jobs in the homepage

const HomeJobs = props => {

    const [loadedJobs,setLoadedJobs] = useState();
    const {isLoading , sendRequest} = useHttpClient();

    useEffect(() => {
        const fetchJobs = async () => {
          try{
    
            const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/jobs/all');
            setLoadedJobs(responseData.allJobs);
    
          }catch(err){
            console.log(err.message);
          }
    
        };
    
        fetchJobs();
      },[sendRequest]);



    return (  
        <Container >
            {isLoading && (<div className="text-center"> <LoadingSpinner/></div>)}
            {!isLoading && loadedJobs && <JobsList position={props.position}  items={loadedJobs}/>}
   
        </Container>
    );
}
 
export default HomeJobs;