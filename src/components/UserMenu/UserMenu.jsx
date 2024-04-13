import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { apiLogoutUser } from "../../redux/auth/operations";
import { selectUserData } from "../../redux/auth/selectors";


export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  return (
    <div className={css.userMenu}>
      <p className={css.welcome}>Welcome, {userData.name}!</p>
      <button
        className={css.logoutBtn}
        type="button"
        onClick={() => dispatch(apiLogoutUser())}
      >
        Logout
      </button>
    </div>
  );
};
