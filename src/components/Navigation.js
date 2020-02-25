import React from 'react';
import{Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
        <Link to="/">Home</Link>
        </div>
        <div>
         <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;


//we don't use just <a> tags with react router. we have to use a component that we can get with react router. using just <a> tags //////will use server side routing instead of client side routing
//Link is this component