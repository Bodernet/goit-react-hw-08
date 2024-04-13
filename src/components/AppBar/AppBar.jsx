import { useSelector } from "react-redux";
import css from "./AppBar.module.css";
import { selectUserIsSignedIn } from "../../redux/auth/selectors";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectUserIsSignedIn);
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
