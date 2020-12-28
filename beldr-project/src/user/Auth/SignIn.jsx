import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import logo from '../../images/logo.png';
import {AuthContext} from '../../shared/context/auth-context';
import {useHttpClient} from '../../shared/hooks/http-hook';


import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';


const SignIn =()=>{

    const auth = useContext(AuthContext);

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const handleEmail = event =>{
        setEmail(event.target.value);
    }

    const handlePassword = event =>{
        setPassword(event.target.value);
    }


    
    const {isLoading , error , sendRequest} = useHttpClient();
    

    const handleSubmit = async event => {
        try{
            const responseData = await sendRequest(
                process.env.REACT_APP_BACKEND_URL + '/users/login',
                'POST',
                 JSON.stringify({
                    email: email,
                    password: password
                }),
                {
                        'Content-Type': 'application/json'
                });
                auth.login(responseData.userId , responseData.token);
        }catch(err){}
     

    };



    return(
        <Container>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='orange' textAlign='center'>
                <Image style={{maxWidth:'40px',width:'100%', height:'auto'}} src={logo} /> Log-in to your account
            </Header>
            <Form size='large'>
                <Segment stacked>
                <Form.Input  onChange={handleEmail} fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                    onChange={handlePassword}
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                />
                <div className="pb-4">
                    <h5 style={{color:'red', fontFamily:'sans-serif', fontWeight:'bold', fontSize:'small'}}>{error}</h5>
                </div>
        
                <Button onClick={handleSubmit} color='orange' fluid size='large'>
                    Login
                </Button>
                </Segment>
                {isLoading && <LoadingSpinner asOverlay />}
            </Form>
            <Message>
                New to us? <a href='#/Signup'>Sign Up</a>
            </Message>
            </Grid.Column>
            </Grid>
        </Container>
    );
};

export default SignIn;