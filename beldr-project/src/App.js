import {HashRouter as Router , Switch , Route , Redirect } from "react-router-dom";
import './App.css';
import React ,{useState , useCallback , useEffect , Suspense} from 'react';
import 'semantic-ui-css/semantic.min.css';
import NavigationBar from './shared/Navbar/NavigationBar';
import SharedFooter from './shared/Footer/SharedFooter';
//import UserProfile from "./user/Profile/pages/UserProfile";
//import Home from "./homePage/pages/Home";
//import Find from "./findHelp/pages/Find";
//import SignIn from "./user/Auth/SignIn";
import {AuthContext} from './shared/context/auth-context';
import LoadingSpinner from "./shared/UIElements/LoadingSpinner";
//import SignUp from "./user/Auth/SignUp";
//import Jobs from "./findJob/pages/Jobs";
//import AddJob from "./user/Profile/components/AddJob";
//import UpdateJob from "./user/Profile/components/UpdateJob";



//Using Lazy import to make the website faster and handling less data in realtime using

const UserProfile = React.lazy(()=> import('./user/Profile/pages/UserProfile'));
const Home = React.lazy(()=> import('./homePage/pages/Home'));
const Find = React.lazy(()=> import('./findHelp/pages/Find'));
const SignIn = React.lazy(()=> import('./user/Auth/SignIn'));
const SignUp = React.lazy(()=> import('./user/Auth/SignUp'));
const Jobs = React.lazy(()=> import('./findJob/pages/Jobs'));
const AddJob = React.lazy(()=> import('./user/Profile/components/AddJob'));
const UpdateJob = React.lazy(()=> import('./user/Profile/components/UpdateJob'));


let logoutTimer;



const App = ()=> {

  const [token , setToken ] = useState(false); 
  const [userId , setUserId ] = useState(); 
  const [tokenExpirationDate,setTokenExpirationDate] = useState();


  const login = useCallback((uid , token , expirationDate) => {
        setToken(token);
        setUserId(uid);
        const tokenExpirationDate = expirationDate ||  new Date(new Date().getTime() + 1000 * 60 * 60); //+1hour
        setTokenExpirationDate(tokenExpirationDate);
        localStorage.setItem('userData', JSON.stringify({userId: uid , token:token , expiration: tokenExpirationDate.toISOString()}));
  },[]);

  const logout = useCallback(()=>{
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem('userData');
  },[]);

  useEffect(() => {
      if(token && tokenExpirationDate){
            const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
      }else{
            clearTimeout(logoutTimer);
      }
  },[token , logout , tokenExpirationDate])

  useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem('userData'));
      if(storedData && storedData.token && new Date(storedData.expiration) > new Date() ){
            login(storedData.userId , storedData.token , new Date(storedData.expiration))
      }
  }, [login]);  




  
  //routing

  let routes;

  if(token){
    routes=(
      <Switch>
        <Route exact path="/">
              <Home />
        </Route>
        <Route exact path="/:userId/profile">
              <UserProfile />
        </Route>
        <Route path="/:userId/profile/add-job">
              <AddJob />
        </Route>
        <Route path="/:userId/profile/update-job/:jobId">
              <UpdateJob />
        </Route>
        <Route path="/Find">
             <Find />
        </Route>
        <Route path="/Jobs">
             <Jobs />
        </Route>
        <Redirect to="/" />
      </Switch>

    );
  }else{

    routes=(
      <Switch>
        <Route exact path="/">
              <Home />
        </Route>
        <Route exact path="/:userId/profile">
              <UserProfile />
        </Route>
        <Route path="/Login">
              <SignIn />
        </Route>
        <Route path="/Signup">
              <SignUp />
        </Route>

        <Route path="/Find">
             <Find />
        </Route>
        <Route path="/Jobs">
             <Jobs />
        </Route>
        <Redirect to="/Login" />
      </Switch>
    );
  }


  return (
  <AuthContext.Provider value={{isLoggedIn : !!token ,token:token, userId:userId, login:login , logout:logout}}>
   <Router basename={process.env.PUBLIC_URL}>
       <NavigationBar />
       <Suspense fallback={<div className="text-center"><LoadingSpinner/></div>}>
            {routes}
       </Suspense>
       <SharedFooter />
    </Router>
  </AuthContext.Provider>
  );
}

export default App;
