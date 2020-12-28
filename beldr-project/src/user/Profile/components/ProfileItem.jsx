import React, { useContext } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import Avatar from '../../../shared/UIElements/Avatar';
import './ProfileItem.css';
import { Link } from 'react-router-dom';
import ProfileJobs from './ProfileJobs';
import { Button, Icon } from 'semantic-ui-react';
import {AuthContext} from '../../../shared/context/auth-context';



const ProfileItem = props => {

    const auth = useContext(AuthContext);

    const handleSettings = () => {
        
    };

 return( 


    <Container className="form-container p-3">
        <Row>
        <Col></Col>
            <Col sm={12}>  
                <div className="user-profile__info text-center">
                    <h2>{props.user.name.slice(0,1).toUpperCase() + props.user.name.slice(1, props.user.name.length)}</h2>
                   
                </div>
            </Col>
     
            <Col></Col>
            
        </Row>
        <Row >
            <Col>

            </Col>
            <Col >
                <div className="user-profile__image">
                    
                    <Avatar image={`${process.env.REACT_APP_ASSET_URL}/${props.user.image}`} alt={props.user.name} />
                   
                </div>
          { props.user.id === auth.userId &&
              <Row className="text-center">

                <Button onClick={handleSettings} title="Settings" size="mini" circular icon='settings' /> 
                <h5 id="h5css" className="h5css pt-1">Edit Profile Settings</h5>
              </Row> }
            </Col>
     
            <Col></Col>
        </Row>
        <Row>
        <Col></Col>
            <Col>  
                <div className="user-profile__info text-center">
                <hr />
                <h3><strong style={{color:'green'}}> {props.user.phone} </strong> </h3>
                <h3><strong> {props.user.address.slice(0,1).toUpperCase() + props.user.address.slice(1, props.user.address.length)}</strong>  </h3>
           
                   
                </div>
            </Col>
           
            <Col></Col>
            
        </Row>
        <Row>
              <div className="text-center pt-3" style={{width:'100%'}}>
                    <Button size='mini' color='facebook'>
                        <Icon name='facebook' /> Facebook
                    </Button>
                    <Button size='mini' color='instagram'>
                        <Icon name='instagram' /> Instagram
                    </Button>
                    <Button  size='mini' color='youtube'>
                        <Icon name='youtube' /> Youtube
                    </Button>
                </div>
        </Row>
        <hr />

       {(props.user.jobs.length > 0)? <div>
       <Row>
            <Col>
                <h3 className="h3css pb-3 text-center">Open Jobs ({props.user.jobs.length})</h3>
              
            </Col>
        </Row>
        <Row>
            
            <ProfileJobs position='PROFILE'/>
        
       </Row> </div>: <h3 className="h3css pb-3 text-center">there is no current open Jobs</h3>}
        <Row>
            <Col>
            </Col>
            <Col md={3} sm={6} xs={6}  className="p-4">
                { props.user.id === auth.userId &&  <Link to={`/${props.user.id}/profile/add-job`}><button style={{width:'100%'}} className="btn btn-primary text-center" >Add a job</button></Link>}
            </Col>
            <Col>
            </Col>
        </Row>
     </Container>
     );
};
export default ProfileItem;