
import React, { useState , useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Form, Input, TextArea, Button, Dropdown } from 'semantic-ui-react';
import  {useHttpClient} from '../../../shared/hooks/http-hook'; 
import { AuthContext } from '../../../shared/context/auth-context';
import LoadingSpinner from '../../../shared/UIElements/LoadingSpinner';

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
  

const AddJob = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const {isLoading , sendRequest} = useHttpClient();
    const [title,setTitle] = useState();
    const [address,setAddress] = useState();
    const [price,setPrice] = useState();
    const [description,setDescription] = useState();

    const handleTitle = (e, data)  =>{
        setTitle(data.value);
    };
    const handleDescription = event =>{
        setDescription(event.target.value);
    };
    const handlePrice = event =>{
        setPrice(event.target.value);
    };
    const handleAddress = event =>{
        setAddress(event.target.value);
    };

    const handleSubmit = async () =>{
        try{
         
            await sendRequest(   process.env.REACT_APP_BACKEND_URL + '/jobs' , 'POST' ,  JSON.stringify({
                title:title,
                description:description,
                price:price,
                address:address,
                creator:auth.userId
            }),
            {'Content-Type':'application/json' , Authorization: 'Bearer ' + auth.token}
            );

            console.log('added:' + title + ' - ' + description + ' - ' + price + ' - ' + address + ' - ' + auth.userId);
            history.push(`/${auth.userId}/profile`);

        }catch(err){ console.log(err.message);}
    };

    return (   
        <main>
       
            <Container className="form-container text-center">
                           
      
                <Form>
                <Form.Field
                        id='form-input-control-Address'
                        control={Dropdown}
                        onChange={handleTitle}
                        fluid
                        search
                        selection
                        options={options}
                        label='Title'
                        placeholder='Select one skill'
                    />
                    <Form.Group widths='equal'>
           
               
                    <Form.Field
                        id='form-input-control-Address'
                        control={Input}
                        onChange={handleAddress}
                        label='Address'
                        placeholder='Address'
                    />
                    <Form.Field
                    id='form-input-control-error-price'
                    control={Input}
                    onChange={handlePrice}
                    label='Price per day'
                    placeholder='100 shekels/dollars for example'
                    />
                    </Form.Group>
      
   
                    <Form.Field
                    id='form-textarea-control-Descrption'
                    control={TextArea}
                    onChange={handleDescription}
                    label='Descrption'
                    placeholder='Descrption'
                    />
 
                    <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    onClick={handleSubmit}
                    content='Confirm'
                    style={{background:'orange' }}
                    />
                    {isLoading && <LoadingSpinner asOverlay/>}
                </Form> 
        </Container>
    </main>
      );
}
 
export default AddJob;