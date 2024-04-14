import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectUserIsSignedIn,
  selectUserIsRefreshing,
} from "../../redux/auth/selectors";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  const isRefreshing = useSelector(selectUserIsRefreshing);

  return !isSignedIn && !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    Component
  );
};

export default PrivateRoute;
