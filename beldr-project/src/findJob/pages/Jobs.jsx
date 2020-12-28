import React, { useEffect } from 'react';
import { useState } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import {Button , Icon , Dropdown} from 'semantic-ui-react';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';
import JobsList from '../components/JobList';
import './Jobs.css'


//Dropdown options
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




const Jobs = props => {

  const [AllJobs,setAllJobs] = useState(true);
  const [SkillSelected, setSkillSelected] = useState([]);
  const[LoadedJobs,setLoadedJobs] = useState();
  const {isLoading, sendRequest} = useHttpClient();



  //fetching jobs from the server
  useEffect(() => {
    const fetchJobs = async () => {
      try{

        const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/jobs/all');
        setLoadedJobs(responseData.allJobs);

      }catch(err){
        console.log(err.message);
      }

    };

    fetchJobs();
  },[sendRequest]);


      

  const  handleSelectChange = (e, data) =>{
    setSkillSelected(data.value);      
  };

  const handleAllJobs = e => {
    setAllJobs(true);
  };

  const handleSearch = e => {
    setAllJobs(false);
  };

  let setJobs;
  if(LoadedJobs){
    //Filtering jobs by the search dropdown!
    setJobs = LoadedJobs.filter(job => SkillSelected.includes(job.title)===true);
  }



  return (
      <Container>
          <main> 
                <Row>
                    <Col className="text-center">
                        <h1 className="h1cs">Find  Job</h1>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">  
                    {/*Choosing Search or AllJobs*/}
                    <Button.Group>
                        <Button color='orange' onClick={handleAllJobs}  size='large'><Icon style={{float:'left'}} name="arrow left"></Icon>All Jobs</Button>
                        <Button.Or />
                        <Button color='google plus' onClick={handleSearch}  size='large'><Icon style={{float:'right'}} name="search right"></Icon>Search</Button>
                    </Button.Group>   
     
                    </Col>
                </Row>
                <Row>
                    {/*IF Alljobs choosen then display alljobs*/}
                    {AllJobs === true ?
                     (  
                        <Col>
                             <h3 className="h3css text-center pt-5"> All Jobs </h3>
                             {isLoading && (<div className="text-center"> <LoadingSpinner/></div>)}
                              { !isLoading && LoadedJobs &&  <JobsList items={LoadedJobs} /> }
                        </Col> 

                     ):(

                             <Col className="text-center pt-5">
                              {/*IF SEARCH choosen then display SEARCH for jobs*/}

                                <Row>
                                    <Col>
                                        <h4 className="h4css">You can easily find the <strong style={{color:'orange'}}>JOB</strong> you need in here</h4>
                                        <h4 className="h4css text-center">Just select the right skills and press the orange search</h4>
                                    </Col>
                                </Row>
                           
                                <Row>
                                    <Col>
                                        <Row className="divider h2 p-3"/>
                                             <h5 className="text-center">Choose the skills:</h5>
                                        <Row className="divider h2 p-1"/>
                                    </Col>
                                </Row> 
                                <Row>
                                    <Col xs={12} md={10} id="findDiv">
                                        <Dropdown
                                            placeholder="Choose Skills"
                                            onChange={handleSelectChange}
                                            fluid
                                            multiple
                                            search
                                            selection
                                            options={options}
                                            ></Dropdown>
                                               <Row className="divider h2 p-2"/>
                                      {  /*<Button color='orange' onClick={handleChange}  size='large'><Icon style={{float:'right'}} name="search right"></Icon>
                                            Search
                                  </Button>*/}
                                    </Col>
                                </Row>
                                {/* Display the choosen job skills from the dropdown -setJobs- */}
                                {isLoading && (<div className="text-center"> <LoadingSpinner/></div>)}
                                { !isLoading && LoadedJobs && <JobsList items={setJobs} />}
                            </Col>
                    )}
                   
                </Row>
                <div style={{paddingBottom:'5em'}}></div>
          </main>
      </Container>
  );
 
};

export default Jobs;
