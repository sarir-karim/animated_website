import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'

function App() {
  return (
   <>
    <Router>
      <Navbar />
        <Switch>
          <Route path="/home" exact components={Home} />
          <Route path="/services" exact components={Services} />
          <Route path="/products" exact components={Products} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
    </Router>

   </>
  );
}

export default App;
