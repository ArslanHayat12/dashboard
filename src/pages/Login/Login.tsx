import { useHistory } from "react-router";
import { useSessionContext } from "../../context/SessionContext";
import { roleBasedRoutes } from "../../models/session";
import { LoginStyle } from "./style";

export default function Login() {
  const [session, setSession] = useSessionContext();
  const history = useHistory();

  const handleLogin = () => {
    const role:any='admin'
    setSession({...session, isAuthenticated: true,role});
    history.push(roleBasedRoutes[role].redirectPath);
  }

  const handleUserLogin = () => {
    const role:any='user'
    setSession({...session, isAuthenticated: true,role});
    history.push(roleBasedRoutes[role].redirectPath);
  }

  return <LoginStyle><button onClick={handleUserLogin}>User Login</button><button onClick={handleLogin}>Admin Login</button></LoginStyle>;
}