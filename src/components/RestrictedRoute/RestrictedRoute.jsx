import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserIsSignedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  return isSignedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
