import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './pages/Login'
import Wufa from './pages/Wufa'
import AuthRoute from 'components/AuthRoute'
import Lay from 'pages/Lay'



function App() {
  return (
    <Router>
      <div className='App'>
        {/* 配置路由规则 */}
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <AuthRoute
            exact 
            path="/home"
            component={Lay}
          />
          {/* 配置一个404 */}
          <Route path="/wufa" component={Wufa}></Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
