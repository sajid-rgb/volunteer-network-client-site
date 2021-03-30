import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import AddEvents from './Components/AddEvents\'/AddEvents';
import Event from './Components/Event/Event';
import Registration from './Components/Registration/Registration';
import Admin from './Components/AddEvents\'/Admin';
import Donation from './Components/Donation/Donation';
import { createContext, useState } from 'react';
export const HideContext = createContext()
function App() {
  const [isHide,setIsHide] = useState(false)
  return (
    <div className="App">
      <HideContext.Provider value={[isHide,setIsHide]}>
     <Router>
       <Header></Header>
       <Switch>
       <Route exact path='/'>
         <Main ></Main>    
         </Route>
         <Route path='/home'>
         <Main ></Main>    
         </Route>
         <Route path='/events'>
           <AddEvents></AddEvents>
         </Route>
         <Route path='/event/:name'>
           <Event></Event>
         </Route>
         <Route path='/registration'>
           <Registration></Registration>
         </Route>
         <Route path='/admin'>
           <Admin></Admin>
         </Route>
         <Route path='/donation'>
           {
             isHide ? <Donation></Donation>:<h3 className='text-danger text-center'>Please first select any item......</h3>
           }
           
         </Route>
         <Route path='*'>
         <h3 className="text-center text-danger">404-Link not found</h3> 
         </Route>
       </Switch>
     </Router>
     </HideContext.Provider>
    </div>
  );
}

export default App;
