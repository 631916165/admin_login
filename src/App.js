import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './pages/Login'
import Wufa from './pages/Wufa'
import AuthRoute from 'components/AuthRoute'
import Lay from 'pages/Lay'

function App() {
  const isAuthenticated = !!localStorage.getItem('token-geek-pc-hz21');
  console.log('s',isAuthenticated);
  return (
    <Router>
      <div className='App'>
        {/* 配置路由规则 */}
        <Switch>
          <AuthRoute
            exact 
            path="/home"
            component={Lay}
            isAuthenticated={isAuthenticated}
          />
          <Route exact path="/login" component={Login}></Route>
          {/* 配置一个404 */}
          <Route path="/wufa" component={Wufa}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
