import './App.scss';
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Login from '../src/components/login/login';
 import reset from './components/resetpassword/reset';
import Register from '../src/components/register/register';

function App() {
  return (
    <div className="App">
     <Router>
     <div>
            <Switch>
            <Route path="/login" component={Login}/>
              
            <Route path="/register" component={Register}/>
            <Route path="/reset" component={reset}/>

            </Switch>
     </div>
     </Router>
    </div>
  );
}

export default App;
