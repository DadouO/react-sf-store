import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import AppNavbar from './components/AppNavbar';
import MenuAppBar from './components/MenuAppBar';
//import SimpleTabs from './components/TabsAppBar';
import Produit from './components/Produit.component';
import Categories from './components/Categories.component';
import ConnexionForm from './components/ConnexionForm';
import FilteredProducts from './components/FilteredProducts';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [email, setMail] = useState("");

  return (
    <Router>
    <div className="App">
        {/* <AppNavbar patate={"HAHAHHAHAHAH"}/> */}
        <MenuAppBar setAuth={setLoggedIn} auth={isLoggedIn} email={email}/>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                  <Typography variant="h5" component="h1">Produit</Typography></Link>
                </li>
                <li className="navbar-item">
                  <Link to="/categories" className="nav-link"><Typography variant="h5" component="h1">Categories
                  </Typography></Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/"  exact render={(props)=> (
          <Produit {...props} lg={isLoggedIn}/> 
          )}></Route> 
        {/* <Route path="/" exact component={Produit} lg ={isLoggedIn}/> */}
        <Route path="/categories" render={(props) => (
          <Categories {...props} lg={isLoggedIn}/>
        )} />
        {/* <Route path="/categories" component={Categories} /> */}
        <Route path="/FilteredProducts" render={(props) => (
          <FilteredProducts {...props} lg={isLoggedIn}/>
        )} />
        {/* <Route path="/loginForm" component={ConnexionForm}></Route> */}
        <Route path="/loginForm" render={(props)=> (
          <ConnexionForm {...props} lg={isLoggedIn}  gg={setLoggedIn} email={email} setMail={setMail}  /> 
        )}></Route>
    </div>
    </Router>
  );
}

export default App;
