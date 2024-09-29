import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import AppContainer from '../AppContainer/AppContainer';

import styles from './AppNavBar.module.css';
import clsx from 'clsx';

const AppNavBar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleNavLinkClick = to => {
    setActiveLink(to);
  };

  const buildClassName = to => {
    return clsx(styles.navLink, to === activeLink && styles.active);
  };

  return (
    <AppContainer>
      <nav className={styles.navBar}>
        <NavLink
          className={buildClassName('/')}
          to="/"
          onClick={() => handleNavLinkClick('/')}
        >
          Home
        </NavLink>

        <NavLink
          className={buildClassName('/movies')}
          to="/movies"
          onClick={() => handleNavLinkClick('/movies')}
        >
          Movies
        </NavLink>
      </nav>
    </AppContainer>
  );
};

export default AppNavBar;
