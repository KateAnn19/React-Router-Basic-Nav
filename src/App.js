import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
  <div>
    <Navigation />
    
  </div>
  <div>
  <Route exact path='/' component={Home}/>
  <Route path="/about">
    <About />
  </Route>
  <Route path='/contact' component={Contact}/>
  </div>
  </div>
);

//-------------------------------------------------------------
//Notes
//-------------------------------------------------------------

//path is a prop
//component is a prop
//you can name path anything you want to, but it's good to be semantic
//exact is a prop and means only render when the slash exactly matches
//if you don't have anything after a prop it defaults to true so we don't have to have exact={true} it's redundant



export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <BrowserRouter> */}
//         <Link to='/about'>About</Link>
//         <Link to='/'>Home</Link>
//         <Link to='/contact'>Contact</Link>
//         <Link to='/blog'>Blog</Link>

//         <Route path='/blog' component={Blog}/>
//         <Route exact path='/' component={Home}/>
//         <Route path='/about' component={About} />
//         <Route path='/contact' component={Contact}/>
//         {/* </BrowserRouter> */}
//         <Route path='/blog' render={(props) => {
//           debugger
//           return <h1>The Blog</h1>
//         }}/>
//       </header>
//     </div>
//   );
// }