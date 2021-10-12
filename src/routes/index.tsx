import PrivateRoutes, { PrivateRoutesProps } from "./PrivateRoutes";
import { useSessionContext } from "../context/SessionContext";
import { Redirect, Route, Switch } from 'react-router';
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login/Login";
import About from "../pages/About";
import Admin from "../pages/Admin";
import User from "../pages/User";

export default function Routes() {
  const [sessionContext, updateSessionContext] = useSessionContext();

  const setRedirectPath = (path: string) => {
    updateSessionContext({...sessionContext, redirectPath: path});
  }

  const defaultPrivateRoutesProps: PrivateRoutesProps = {
    isAuthenticated: !!sessionContext.isAuthenticated,
    authenticationPath: '/login',
    redirectPath: sessionContext.redirectPath,
    setRedirectPath: setRedirectPath,
    role:'admin'
  };

  return (
    <div>
      <Switch>
        <PrivateRoutes {...defaultPrivateRoutesProps} redirectPath="/dashboard" path='/dashboard' component={Dashboard} />
        <PrivateRoutes {...defaultPrivateRoutesProps} redirectPath="/about" path='/about' component={About} role='user' />
        <PrivateRoutes {...defaultPrivateRoutesProps} redirectPath="/user" path='/user' component={User} />
        <PrivateRoutes {...defaultPrivateRoutesProps} redirectPath="/admin" path='/admin' component={Admin} role='user' />
       
        <Route path='/login' component={Login} />
        <Redirect
            to={{
              pathname: "/login",
              state: { from: '/' }
            }}
          />
      </Switch>
    </div>
  );
};
