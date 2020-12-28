import React, { useContext } from 'react';

import { Button  ,Card} from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';

import  {useHttpClient} from '../../../shared/hooks/http-hook'; 
import { AuthContext } from '../../../shared/context/auth-context';
import LoadingSpinner from '../../../shared/UIElements/LoadingSpinner';
import './JobItem.css';

const JobItem = props => {

    const auth = useContext(AuthContext);
    const history = useHistory();
    const {isLoading , sendRequest} = useHttpClient();




    const handleDelete = async () =>{
      try{
       
          await sendRequest(   process.env.REACT_APP_BACKEND_URL + `/jobs/${props.id}` , 'DELETE' , null ,  {Authorization: 'Bearer ' + auth.token});
          history.push(`/${auth.userId}/profile`);
          props.onDelete(props.id);
      }catch(err){ console.log(err.message);}
  };


  return (
    <li className="jobs-item">
       
      <Card id="ere2">
       {isLoading &&  <LoadingSpinner asOverlay/>}
      <Card.Content>
        <Card.Header>{props.title} Job</Card.Header>
        <Card.Meta style={{color:'#f7aa67'}}>{props.address}</Card.Meta>
        <Card.Description>
          {props.description} <strong>{props.price}₪</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      { (auth.userId === props.creator) && <div id="ere" className='ui two buttons'>
          <Button  basic  color='orange'><Link className="updateDelete" to={`/${auth.userId}/profile/update-job/${props.id}`}>
              Update
            </Link></Button>
         
            <Button onClick={handleDelete} basic color='orange'><Link  className="updateDelete">
              Delete
            </Link></Button>
        </div>}
      </Card.Content>
    </Card>
    
           
    </li>

  );
};

export default JobItem;
