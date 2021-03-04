import { useState } from 'react';
import clsx from 'clsx';
import styles from '../../styles';

const Header = () => {
  const [showHeader, setHeaderDisplay] = useState(false);
  return (
    <styles.Header>
      <nav className='navbar' role='navigation' aria-label='main-navigation'>
        <div className='navbar-brand'>
          <a href='/' className='navbar-item'>
            <img src='' alt='Logo' loading='lazy' decoding='async' />
          </a>

          <span role='button' className={clsx('navbar-burger', showHeader ? 'is-block' : '')} 
          aria-label='menu' aria-expanded='false' data-target='main-navbar'
          onClick={() => setHeaderDisplay(!showHeader)}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </span>
        </div>

        <div id='main-navbar' className={clsx('navbar-menu', showHeader ? 'is-block' : '')}>
          <div className='navbar-start'>
            <a href='/' className='navbar-item'>
              Home
            </a>
          </div>
          <div className='navbar-end'>
          </div>
        </div>
      </nav>
    </styles.Header>
  );
}

export default Header;
