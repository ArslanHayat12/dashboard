import PrivateRoutes, { PrivateRoutesProps } from "./PrivateRoutes";
import { useSessionContext } from "../context/SessionContext";
import { Redirect, Route, Switch } from 'react-router';
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login/Login";
import About from "../pages/About";

export default function Routes() {
  const [sessionContext, updateSessionContext] = useSessionContext();

  const setRedirectPath = (path: string) => {
    updateSessionContext({...sessionContext, redirectPath: path});
  }

  const defaultPrivateRoutesProps: PrivateRoutesProps = {
    isAuthenticated: !!sessionContext.isAuthenticated,
    authenticationPath: '/login',
    redirectPath: sessionContext.redirectPath,
    setRedirectPath: setRedirectPath
  };

  return (
    <div>
      <Switch>
        <PrivateRoutes {...defaultPrivateRoutesProps} redirectPath="/dashboard" path='/dashboard' component={Dashboard} />
        <PrivateRoutes {...defaultPrivateRoutesProps} redirectPath="/about" path='/about' component={About} />
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
