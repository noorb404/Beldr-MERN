import React, { useContext, useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import logo from '../../images/logo.png';
import {AuthContext} from '../../shared/context/auth-context';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';
import {useHttpClient} from '../../shared/hooks/http-hook';
import ImageUpload from '../../shared/UIElements/ImageUpload';

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

const SignUp =()=>{


    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [address,setAddress] = useState();
    const [phone,setPhone] = useState();
    const [SkillSelected, setSkillSelected] = useState();

    const [image,setImage] = useState();


    const handleName = event =>{
        setUsername(event.target.value);
    }

    const handleEmail = event =>{
        setEmail(event.target.value);
    }

    const handlePassword = event =>{
        setPassword(event.target.value);
    }
    const handleAddress = event =>{
        setAddress(event.target.value);
    };
    
    const handlePhone = event =>{
        setPhone(event.target.value);
    };

    
    const  handleSelectChange = (e, data) =>{
      setSkillSelected(data.value);
    };

    const onInputChange = (id,pickedFile,fileIsValid) => {
        if(fileIsValid)
            setImage(pickedFile);
    };

    const {isLoading , error , sendRequest} = useHttpClient();
    
   

    const auth = useContext(AuthContext);

    const handleSubmit = async () => {
  
        try{

            const formData =  new FormData();
            formData.append('email',email);
            formData.append('name',username);
            formData.append('password',password);
            formData.append('phone',phone);
            formData.append('address',address);
            formData.append('skill',SkillSelected);
            formData.append('image',image);

            const responseData = await sendRequest(
                process.env.REACT_APP_BACKEND_URL + '/users/signup',
            'POST',
            formData,
          );
            auth.login(responseData.user , responseData.token);

        }catch(err){}

        

    };

    return(
        <React.Fragment>
        

        <Grid textAlign='center' style={{ height: '130vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='orange' textAlign='center'>
                <Image style={{maxWidth:'40px',width:'100%', height:'auto'}} src={logo} /> Sign-up to Beldr
            </Header>
            
            <Form size='large'>

                <Segment stacked>
                
                <Form.Field>
                <ImageUpload onInput={onInputChange} id="image"/>

           
                </Form.Field>

                <Form.Input name='name' onChange={handleName} fluid icon='user'  iconPosition='left' placeholder='Name' />
                <Form.Input name='phone' onChange={handlePhone} fluid icon='phone' iconPosition='left' placeholder='Phone' />
                <Form.Input name='address' onChange={handleAddress} fluid icon='home' iconPosition='left' placeholder='Address' />
                <Form.Dropdown    
                                    placeholder="Choose Skills"
                                    onChange={handleSelectChange}
                                    fluid
                                    search
                                    selection
                                    options={options}
                                     />
                <Form.Input name='email' onChange={handleEmail} fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                    fluid
                    name='password'
                    onChange={handlePassword}
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Confirm Password'
                    type='password'
                />
                <div className="pb-4">
                    <h5 style={{color:'red', fontFamily:'sans-serif', fontWeight:'bold', fontSize:'small'}}>{error}</h5>
                </div>

                
        
                <Button onClick={handleSubmit} color='orange' fluid size='large'>
                    Signup
                </Button>

                </Segment>
                {isLoading && <LoadingSpinner asOverlay />}

            </Form>
            <Message>
               Already have an account? <a href='#/Login'>Login</a>
            </Message>
            </Grid.Column>
        </Grid>
      
     </React.Fragment>
    );
};

export default SignUp;