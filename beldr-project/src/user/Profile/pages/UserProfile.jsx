import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../../shared/UIElements/LoadingSpinner';
import {useHttpClient} from '../../../shared/hooks/http-hook';
import { useParams } from 'react-router-dom';
import ProfileItem from '../components/ProfileItem';





const UserProfile = props => {

      const[loadedUser,setLoadedUser] = useState();
      const {isLoading,  sendRequest} = useHttpClient();
      const userId = useParams().userId; 


      useEffect(() => {

        const fetchUser = async () => {
          try{

            const responseData = await sendRequest(   process.env.REACT_APP_BACKEND_URL +`/users/${userId}`);
            setLoadedUser(responseData.userById);
          
          }catch(err){
            console.log(err.message);
          }

        };

        fetchUser();
      },[sendRequest, userId]);




  return(
    <main style={{background:'lightgray', paddingBottom:'5em'}}>
      {isLoading && (<div className="text-center"> <LoadingSpinner/></div>)}
      {!isLoading && loadedUser && <ProfileItem user={loadedUser} />}
   </main>
    );

};

export default UserProfile;
  
   