import { NavLink } from 'react-router-dom';
import Container from '../Container/Container.js';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <Container>
        <div className={styles.contentPosition}>
          <div className={styles.iconContainer}>
            <span className={'fa fa-tasks'}></span>
          </div>
          <div className={styles.navigatedContainer}>
            <ul>
              <li>
                <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to="/favorite">
                  Favorite
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
