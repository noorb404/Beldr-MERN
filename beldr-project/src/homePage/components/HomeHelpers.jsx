import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';
import UsersList from '../../user/UserCards/components/UserList';

import {useHttpClient} from '../../shared/hooks/http-hook';

//showing first 3 helpers in the homepage 


const HomeHelpers = props => {
  

  const[loadedUsers,setLoadedUsers] = useState();
  const {isLoading, sendRequest} = useHttpClient();

  //fetching users from the server
  useEffect(() => {
    const fetchUsers = async () => {
      try{

        const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/users');
        setLoadedUsers(responseData.users);

      }catch(err){}

    };

    fetchUsers();
  },[sendRequest]);



  return (
    <React.Fragment>
       {isLoading && (<div className="text-center"> <LoadingSpinner/></div>)}
       {!isLoading && loadedUsers && <UsersList position = {props.position} items={loadedUsers} />} 
    </React.Fragment>  
    );
};

export default HomeHelpers;
