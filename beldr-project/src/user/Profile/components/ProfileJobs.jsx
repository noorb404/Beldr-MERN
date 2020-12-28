import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import LoadingSpinner from '../../../shared/UIElements/LoadingSpinner';
import JobsList from './JobsList';


const ProfileJobs = props => {

    const [loadedJobs,setLoadedJobs] = useState();
    const {isLoading  , sendRequest} = useHttpClient();

    const userId = useParams().userId;
    useEffect(() => {
        try {
            const fetchJobs = async () => {

                const responseData = await sendRequest(   process.env.REACT_APP_BACKEND_URL + `/jobs/user/${userId}`);
                setLoadedJobs(responseData.jobs);
            };

            fetchJobs();
        }catch(err){
            console.log(err.message);
        }
    },[sendRequest , userId]);

    const jobDeletedHandler = (deletedIdJob) => {
        setLoadedJobs(prevJobs => prevJobs.filter(job => job.id !== deletedIdJob));
    };

    return (  
        <Container >
            {isLoading && (<div className="text-center"> <LoadingSpinner/></div>)}
            {!isLoading && loadedJobs && <JobsList position={props.position} onDeleteJob={jobDeletedHandler} items={loadedJobs}/>}
   
        </Container>
    );
}
 
export default ProfileJobs;