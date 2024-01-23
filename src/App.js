import Login from './components/login/Login';
import NotFound from './components/pages/NotFound';
import Forbidden from './components/pages/Forbidden';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import useSetPageTitle from './utils/useSetPageTitle';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  useSetPageTitle("Login");
  
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Login/>
          </Route>

          <Route exact path="/dashboard">
            <ProtectedRoute component={Dashboard}/>
          </Route>

          <Route exact path="/forbidden">
            <Forbidden/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
