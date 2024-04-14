import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectUserIsSignedIn } from "../../redux/auth/selectors";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectUserIsSignedIn);
  const getNavLinkClassNames = ({ isActive }) =>
    clsx(css.headerLinc, {
      [css.active]: isActive,
    });

  return (
    <nav className={css.header}>
      <NavLink className={getNavLinkClassNames} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getNavLinkClassNames} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
