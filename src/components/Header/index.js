import { Link } from 'react-router-dom';
import {StickyHeader, MainNavbar, NavBarLiOption, NavBarContent, NavBarLogo, NavBarOptionsList } from './styledComponents';
import './index.css';

const Header = () => {
    return (
      <StickyHeader>
         <MainNavbar>
        <NavBarContent>
          <Link to='/home'>
            <NavBarLogo src='https://cdn-icons-png.freepik.com/128/10977/10977093.png' />
          </Link>
          <NavBarOptionsList>
            <NavBarLiOption>
              <Link  className='navigation-item-link' to='/home'>Home</Link>
            </NavBarLiOption>
            <NavBarLiOption>
              <Link to='/features' className='navigation-item-link'>Features</Link>
            </NavBarLiOption>
            <NavBarLiOption>
              <Link to='/resources' className='navigation-item-link'>Resources</Link>
            </NavBarLiOption>
            <NavBarLiOption>
              <Link to='/contact-us' className='navigation-item-link'>Contact Us</Link>
            </NavBarLiOption>
          </NavBarOptionsList>
        </NavBarContent>
      </MainNavbar>
      </StickyHeader>
     
    );
  }

export default Header;
