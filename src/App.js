import './App.scss';
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Login from '../src/components/login/login';
 import reset from './components/resetpassword/reset';
import Register from '../src/components/register/register';
import forgot from '../src/components/forgotpassword/forgot';
function App() {
  return (
    <div className="App">
     <Router>
     <div>
            <Switch>
            <Route path="/login" component={Login}/> 
            <Route path="/register" component={Register}/>
            <Route path="/resetPassword/:id" component={reset}/>
            <Route path="/forgot" component={forgot}/>
            
            </Switch>
     </div>
     </Router>
    </div>
  );
}

export default App;
