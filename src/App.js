import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import AddUser from './component/user/AddUser';
import EditUser from './component/user/EditUser';
import NotFound from './component/pages/NotFound';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/user/adduser" component={AddUser}/>
        <Route exact path="/user/edituser/:id" component={EditUser}/> 
        <Route component={NotFound}></Route>
      </Switch>
      {/* <Home></Home>
      <About></About>
      <Contact></Contact> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
