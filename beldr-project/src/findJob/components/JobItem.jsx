import React from 'react';
import { Link } from 'react-router-dom';

import { Button  ,Card} from 'semantic-ui-react';
import './JobItem.css';

// the list item of jobs each one is linked to the creator of the job

const JobItem = props => {
  return (
    <li className="job-item" >
      <Link to={`/${props.creator}/profile`}>
      <Card>
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta style={{color:'#f7aa67'}}>{props.address}</Card.Meta>
        <Card.Description>
          {props.description} <strong>{props.price}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='orange'>
              Ask for job
          </Button>
        </div>
      </Card.Content>
    </Card>
        </Link>
           

    </li>
  );
};

export default JobItem;
