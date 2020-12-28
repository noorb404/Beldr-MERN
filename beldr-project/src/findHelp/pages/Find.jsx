import React, { useState } from 'react';
import './Find.css';
import Users from '../../user/UserCards/pages/Users';
import { Container , Dropdown } from 'semantic-ui-react';
import { Col, Row } from 'react-bootstrap';


const Find = () => {
    const [SkillSelected, setSkillSelected] = useState([]);
    
    const  handleSelectChange = (e, data) =>{
      setSkillSelected(data.value);
    };

    //Dropdown Options
    const options = [
        { key: 'Floors fix', text: 'Floors', value: 'Floors' },
        { key: 'Indoor  fix', text: 'Indoor Walls', value: 'Indoor Walls' },
        { key: 'Outdoor fix', text: 'Outdoor Walls', value: 'Outdoor Walls' },
        { key: 'Elctrical fix', text: 'Elctrical', value: 'Elctrical' },
        { key: 'Roof fix', text: 'Roof', value: 'Roof' },
        { key: 'Garden', text: 'Garden', value: 'Garden' },
        { key: 'Carbets', text: 'Carbets', value: 'Carbets' },
        { key: 'Doors', text: 'Doors', value: 'Doors' },
        { key: 'Windows', text: 'Windows', value: 'Windows' },
        { key: 'Lights', text: 'Lights', value: 'Lights' },
        { key: 'Futniture', text: 'Futniture', value: 'Futniture' },
        { key: 'Bathrooms fix', text: 'Bathrooms', value: 'Bathrooms' },
        { key: 'Aircondition fix', text: 'Aircondition fix', value: 'Aircondition fix' },
        { key: 'Tv Cabel fix', text: 'Tv Cabel fix', value: 'Tv Cabel fix' },
      ];
      


    return ( 
           <Container >
               <div  id="find-workers-div">
                      

                           <Row className="p-2 m-auto">
                               <Col>
                               <h1  className="h1css text-center"> Find Help</h1>
                               <hr/>
                               </Col>
                           </Row>
                           <Row className="p-2">
                               <Col >
                               <h4 className="h4css text-center">Just select the right skills you want for the <strong style={{color:'orange'}}>Help</strong> and the workers will appear</h4>
                               </Col>
                           </Row> 
                           <Row>
                               <Col>
                               <Row className="divider h2 p-3"/>
                               <h5 className="h3css text-center">Choose the skills:</h5>
                               <Row className=" p-1"/>
                               </Col>
                           </Row> 
                           <Row>
                               <Col xs={12} md={7} id="findDiv">
                                 <Dropdown
                                    placeholder="Choose Skills"
                                    onChange={handleSelectChange}
                                    fluid
                                    multiple
                                    search
                                    selection
                                    options={options}
                                    />
                               </Col>
                           </Row>
                   
                           <Row className="divider h2 p-2"/>

                           
                            {/*Display the choosen workers from the dropdown */}
                           {SkillSelected.length>0 ? (<Users position='FIND' data={SkillSelected} />):null}

                           <hr />
                        {/** Style fix for bottom footer. */}
                        <div style={{paddingBottom:'5em'}}></div>
                          
                   </div>
           </Container>
    );
};

export default Find;