import React from 'react';

import JobItem from './JobItem';
import './JobList.css';



//Job list (display the list of jobs and if there is'nt any jobs display "NO Jobs Found.")

const JobList = props => {
  if (props.items.length === 0) {
    return (
      <div className="text-center p-3 mt-5">
          <h2>No Jobs found.</h2>
          <h5><strong style={{color:'orange'}}>Reminder: </strong>Press the <strong style={{color:'orange'}}>search</strong> button after choosen the skills</h5>
        
      </div>
    );
  }

  return (
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
        />
      ))}
    </ul>
  );
};

export default JobList;
