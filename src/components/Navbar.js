import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>

        {!user && (
          <Fragment>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </Fragment>
        )}

        {user && (
          <Fragment>
            <li>Hello, {user.displayName}</li>
            <li>
              <button className='btn' onClick={logout}>
                Logout
              </button>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
