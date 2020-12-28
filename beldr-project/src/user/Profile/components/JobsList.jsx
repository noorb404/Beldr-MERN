import React from 'react';

import JobItem from './JobItem';
import './JobsList.css';
import { Card } from 'semantic-ui-react'
import CardExampleHeaderCard from '../../../shared/UIElements/HomeCards';

const JobsList = props => {
  
  if (props.items.length === 0) {
    return (
      <div className="text-center p-3 mt-5">
        
          <h2>No Jobs found.</h2>
        
      </div>
    );
  }

  return (
    <React.Fragment>
    {(props.position==='PROFILE')?(

      
      <ul className="jobs-list">
      {props.items.map(job => (
        <JobItem
        key={job.id}
        id={job.id}
        image={job.image}
        title={job.title}
        price={job.price}
        description={job.description}
        address={job.address}
        creator={job.creator}
        onDelete={props.onDeleteJob}
        />
        ))}
      </ul>
        ):   <Card.Group>
          {props.items.slice(0,3).map(job => (
        <CardExampleHeaderCard
          key={job.id}
          id={job.id}
          image={job.image}
          title={job.title}
          price={job.price}
          description={job.description}
          address={job.address}
          creator={job.creator}
        />
        ))}
          </Card.Group>}
    </React.Fragment>
  );
};

export default JobsList;
