import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './pages/Layout'
import Login from './pages/Login'
import Wufa from './pages/Wufa'

function App() {
  return (
    <Router>
      <div className='App'>
        {/* <Link to="/login">登录</Link>
        <Link to="/home">首页</Link> */}

        {/* 配置路由规则 */}
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          {/* 配置一个404 */}
          <Route path="/wufa" component={Wufa}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
