import React, { useContext } from 'react';
import { Container, Icon ,Button } from 'semantic-ui-react';
import {NavLink, useHistory} from 'react-router-dom';
import './Home.css';
import { Col, Row } from 'react-bootstrap';
import AccordionExampleFluid from '../../shared/UIElements/Accordion';
import {AuthContext} from '../../shared/context/auth-context';
import HomeJobs from '../components/HomeJobs';
import HomeHelpers from '../components/HomeHelpers';

const Home = () =>{
   
   
        const history = useHistory();
        const auth = useContext(AuthContext);
   
        const handleClick = () => {
            if(auth.isLoggedIn)
                history.push(`/${auth.userId}/profile`);

            history.push('/Signup');

        };
        return (
           
            <div className="main">
                <Row>
                    <Col sm={12}  md={6}>
                        <img  className="responsiveImg" alt=""/>
                    </Col>
                    <Col sm={12} md={6} id="rightCol">
                        <Container className="pb-5">
                                <Row className="divider p-4"/>
                                <Row><h1 id="mainh1">What ever you're looking for in the jobs world , We can help.</h1></Row>
                                <Row className="divider p-3"/>
                                <Row><h4 id="mainh4">We're here to ...</h4></Row>
                                <Row className="divider  p-3"/>
                                <Row><NavLink id="hereToBtns"  className="btn btn-primary"  to="/Find" >Help you find helping hand <Icon style={{float:'right'}} name="arrow right"></Icon></NavLink></Row>
                                <Row className="divider p-3"/>
                                <Row><NavLink id="hereToBtns"  className="btn btn-primary " to="/Jobs">Help you find a job<Icon style={{float:'right'}} name="arrow right"></Icon></NavLink></Row>
                                <Row className="divider p-3"/>
                                {(!auth.isLoggedIn)?  <Row><NavLink id="hereToBtnsPrem"  className="btn btn-primary " to="/Signup">Help with growing your work<Icon style={{float:'right'}} name="arrow right"></Icon></NavLink></Row> :   <Row><NavLink id="hereToBtnsPrem"  className="btn btn-primary " to={`/${auth.userId}/profile`}  >Help with growing your work<Icon style={{float:'right'}} name="arrow right"></Icon></NavLink></Row> }
                               
                      
                       </Container>
                    </Col>
                </Row>
               <Row>
                   <div className="BeldrAd text-center p-5">
                         <Row>
                             <Col>
                                    <h2 id="mainh2">Beldr supports ambitious workers all over the world</h2>
                            </Col> 
                        </Row>  
                        <Row style={{padding:'3%'}}>
                            <Col md={4}>
                                <h1 id="mainh1">35,000+</h1>
                                <h5 id="mainh5"> Working in progress in the moment</h5>
                                <hr/>
                            </Col>
                            <Col md={4}>
                                <h1 id="mainh1">490,000+</h1>
                                <h5 id="mainh5">Workers that supported Beldr</h5>
                                <hr/>
                            </Col>
                            <Col md={4}>
                                <h1 id="mainh1">127,000+</h1>
                                <h5 id="mainh5"> Working in progress in the moment</h5>
                                <hr/>
                            </Col>
                        </Row>                 
                   </div>
               </Row>
               
               <Row style={{background:'#f57706',  borderTop:'4px solid white'}} className="p-5">
                    
                    <Col xs={2}></Col>
                    <Col xs={12}>
                    <Container className="form-container ">

                        <Row >
                            <Container style={{padding:'5%'}}>
                            <Row className="text-center">

                                    <Col>
                                        <h2  id="mainh2">HELPERS OPEN TO WORK!</h2>
                                    </Col>
                            </Row>
                                
                            <hr style={{ width:'90%'}}/>

                            <Row>
                                    <Col className="pr-5 mr-5">
                                    <HomeHelpers position='HOME' />
                                    </Col>
                            </Row>
                            </Container>
                        </Row>
                        <Row>
                    
                            <Col className="text-center" style={{paddingBottom:'5%'}}>
                            <Button color='orange' onClick={() =>{history.push('/Find')}}>view all helpers</Button>
                            </Col>
                        </Row>
                    </Container>
                    </Col>
                    <Col xs={2}></Col>

                </Row>   
           

                <Row>
                                
                                <Col > <img  className="responsiveTodayImg" alt=""/></Col>
                                <Col className="ImagePointer" > <img  onClick={handleClick} className="responsiveSignupImg" alt=""/></Col>
                                <Col style={{background:' #f57706'}}></Col>
                </Row>  
           
             
          
                <Row style={{background:'#f57706', borderBottom:'4px solid white' }} className="p-4">
        
                    <Col xs={2}></Col>
                    <Col xs={12}>
                    <Container className="form-container ">

                        <Row >
                            <Container style={{padding:'3%'}}>
                            <Row className="text-center">

                                    <Col>
                                        <h2  id="mainh2">OPEN JOBS!</h2>
                                    </Col>
                            </Row>
                                
                            <hr style={{ width:'90%'}}/>

                            <Row>
                                    <Col className="pr-5 mr-5">
                                     <HomeJobs position='HOME' />
                                    </Col>
                            </Row>
                            </Container>
                        </Row>
                        <Row>
                    
                            <Col className="text-center" style={{paddingBottom:'5%'}}>
                            <Button color='orange' onClick={() =>{history.push('/Jobs')}}>view all jobs</Button>
                            </Col>
                        </Row>
                    </Container>
                    </Col>
                    <Col xs={2}></Col>

                </Row>
       
                <Row>
            
            <Col className="text-center" >
                <AccordionExampleFluid /> 
            </Col>
        </Row>
              
              
                        


            {  /*  <Row>
                    <Col >
                
                    <div className="grayDivHome">
                        
                      
                           <Row style={{padding:'4%'}}>
                                                    
                                <Col className="text-center">
                                    <Container>
                                        <Row>
                                          <Col  className="text-center">
                                               <div className="text-center">
                                                    <Icon  color="orange" name="home" size="huge"></Icon>
                                                    <h3  className="text-center">Easy</h3>
                                                    <p  className="text-center">the easiest way to find a car to leasing or buy with Rents</p>
                                                </div> 
                                                <hr />
                                          </Col>
                                            <Col>
                                                <div className="text-center">
                                                    <Icon color="orange" name="money" size="huge"></Icon>
                                                    <h3 className="text-center">Cheap</h3>
                                                    <p className="text-center">because of the competitive market in Rents you will get the lowest price</p>
                                                </div>
                                                <hr />
                                            </Col>
                                            <Col>
                                                <div className="text-center">
                                                    <Icon color="orange" name="handshake" size="huge"></Icon> 
                                                    <h3 className="text-center">Satisfy</h3>
                                                    <p className="text-center">with the big market of Rents be sure you will find what you are looking for</p>
                                                </div>
                                                <hr />
                                            </Col>
                                            <Col>
                                                <div className="text-center">
                                                    <Icon color="orange" name="search" size="huge"></Icon>  
                                                    <h3 className="text-center">Search</h3>
                                                    <p className="text-center">with Rents search engine you can find your demands in seconds</p>
                                                </div>
                                                <hr />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>

                            </Row>
                        
                    </div>
                    </Col>
                   
                </Row>
*/}             
                 <div className="findBottom" style={{width:'100%'}}>   
                               <Row>
                                   <Col>
                                     <h3 style={{fontWeight:'bold'}}>How does it work?</h3>
                                   </Col>
                               </Row>
                               <Row className="divider h2 p-2"/>
                               <Row>
                                   <Col>
                                
                                     <h5 className="h5css"> What we can do for you?</h5>
                                     <h5 className="h5css">Simply search for the right worker skill and you can set a date for him to come, or you can easily contact him on the phone.</h5>
                                     <h5 className="h5css"> For example the electricity power cuts off and there is no one answering your phone , simply use beldr for better results</h5>
                                   </Col>
                               </Row>

                               <Row className="divider h2 p-4"/>

                               <Row>
                                   <Col>
                                     <h3 style={{fontWeight:'bold'}}>Let us help you!</h3>
                                   </Col>
                               </Row>
                               <Row className="divider h2 p-2"/>
                               <Row>
                                   <Col>
                                     <h5 className="h5css"> Got some truble around the house? Or maybe need something to be fixed , We can easily make your life much better!</h5>
                                   </Col>
                               </Row>

                </div>     
                               
                   
            </div>
   );
}

export default Home;