// 创建路由守卫


import { message } from 'antd';
import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import {hasToken} from 'utils/Storange'

const AuthRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const isAuthenticated = hasToken();
  console.log('isAuthenticateds:', isAuthenticated);

  if (isAuthenticated != true) {
    message.error('您还没有进行登录，无权限访问此页，即将为您跳转到登录页')
    history.push('/login');
    return null;
  }

  return <Route {...rest} component={Component} />;
};

export default AuthRoute;