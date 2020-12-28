import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar , Nav } from 'react-bootstrap';
import './NavigationBar.css';
import { } from "react-router-dom";
import {AuthContext} from '../context/auth-context';


const NavigationBar = () => {
        const auth = useContext(AuthContext);

        const handleLogout = () => {
            auth.logout();
        };

        return (     
            <div style={{width:'100%' , padding:'0'}}>
               
                  
                    <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-md navbar-dark bg-white border-bottom shadow-sm">
                            <div className="container">
                                
                            
                        <Navbar.Brand id="Beldr" href="#/">Beldr</Navbar.Brand>
                        <Navbar.Toggle className="custom-toggler" aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link style={{fontSize:'larger' , fontFamily:'Arial'}} id="Home" href="#/">Home</Nav.Link>
                            <Nav.Link style={{fontSize:'larger' , fontFamily:'Arial'}}  id="Find" href="#/Find">Find help</Nav.Link>
                            <Nav.Link style={{fontSize:'larger' , fontFamily:'Arial'}}   id="Share" href="#/Jobs">Jobs</Nav.Link>
                        </Nav>
                        {!auth.isLoggedIn && (
                            <Nav>
                           
                            <Nav.Link id="signIn" href="#/Login">Login</Nav.Link>
                            <Nav.Link  id="signUp" className="btn btn-primary" href="#/Signup">
                            Sign up
                            </Nav.Link>
                            
                            </Nav>
                        )}
                         {auth.isLoggedIn && (
                                  <Nav className="ml-auto">
                                        <Nav.Link id="Home" href={`#/${auth.userId}/profile`}>Profile</Nav.Link>
                                        <Nav.Link id="Home" onClick={handleLogout} href="#/">Logout</Nav.Link>
                                  </Nav>
                         )}
                        </Navbar.Collapse>
                        </div>
                    </Navbar>
            </div>
         );
   
}
 
export default NavigationBar;