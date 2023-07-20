// 创建路由守卫


import { message } from 'antd';
import React from 'react';
import { Route, useHistory } from 'react-router-dom';

const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const history = useHistory();

  console.log('isAuthenticateds:', isAuthenticated);

  if (!isAuthenticated) {
    message.error('您还没有进行登录，无权限访问此页，即将为您跳转到登录页')
    history.push('/login');
    return null;
  }

  return <Route {...rest} component={Component} />;
};

export default AuthRoute;