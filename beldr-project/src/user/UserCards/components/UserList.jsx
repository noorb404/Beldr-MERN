import React from 'react';

import UserItem from './UserItem';
import './UserList.css';

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="text-center p-3 mt-5">
        
          <h2>No help found.</h2>
        
      </div>
    );
  }

  return (
    <React.Fragment>
      {(props.position === 'FIND')? (
        
        <ul className="users-list">
        {props.items.map(user => (
          <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          skill={user.skill}
          work={user.jobs.length}
          />
          ))}
          </ul>
        ):      
          <ul className="users-list">
          {props.items.slice(0,3).map(user => (
            <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            skill={user.skill}
            work={user.jobs.length}
            />
            ))} 
          </ul>
      }

    </React.Fragment>
  );
};

export default UsersList;
