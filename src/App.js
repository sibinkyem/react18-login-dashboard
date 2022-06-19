
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import  Login from './components/Login'
import  Logout from './components/Logout'
import Box from "@mui/material/Box";
import Home from "./components/Home"
import MiniDrawer from './components/Sidebar'



const App = (props) => { 
  let routes = useRoutes([
    { path: "/", element: props.isLoggedIn ? <Home  />: <Login setLoggedIN={props.setLoggedStatus} /> },
    { path: "/home", element: props.isLoggedIn ? <Home  />: <Login setLoggedIN={props.setLoggedStatus} /> },
    { path: "/login", element: <Login setLoggedIN={props.setLoggedStatus} /> },
    { path: "/logout", element: <Login setLoggedIN={props.setLoggedStatus} /> },
  ]);
  return routes;
}

const AppWrapper = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const setLoggedIN = () => {
    setLoggedIn(!isLoggedIn);
  }
  let sidebar;
  if(isLoggedIn) {
    sidebar = <MiniDrawer setLoggedStatus={setLoggedIN} />
  }
  
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        {sidebar}
        <App isLoggedIn={isLoggedIn} setLoggedStatus={setLoggedIN}  />
      </Box>      
    </Router>
  );
};

export default AppWrapper;
