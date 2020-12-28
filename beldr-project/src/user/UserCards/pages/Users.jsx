import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../../shared/UIElements/LoadingSpinner';
import UsersList from '../components/UserList';

import {useHttpClient} from '../../../shared/hooks/http-hook';


const Users = props => {
  

  const[loadedUsers,setLoadedUsers] = useState();
  const {isLoading, sendRequest} = useHttpClient();

  useEffect(() => {
    const fetchUsers = async () => {
      try{

        const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/users');
        setLoadedUsers(responseData.users);

      }catch(err){}

    };

    fetchUsers();
  },[sendRequest]);


  let FilteredUsers;
  if(loadedUsers){
     FilteredUsers = loadedUsers.filter(user => props.data.includes(user.skill)===true);
  }
  return (
    <React.Fragment>
       {isLoading && (<div className="text-center"> <LoadingSpinner/></div>)}
       {!isLoading && loadedUsers && <UsersList position={props.position} items={FilteredUsers} />} 
    </React.Fragment>  
    );
};

export default Users;
