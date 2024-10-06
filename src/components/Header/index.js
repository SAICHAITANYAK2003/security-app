import {Link} from 'react-router-dom'
import {MainNavbar, NavBarLiOption,NavBarContent,NavBarLogo,NavBarOptionsList} from './styledComponents'
import  './index.css'

const Header=()=>{
    return(
        <MainNavbar>
        <NavBarContent>
            <Link to='/'>
            <NavBarLogo src='https://cdn-icons-png.freepik.com/128/10977/10977093.png'/>

            </Link>

            <NavBarOptionsList>
                <Link to='/' className='navigation-item-link'>
                <NavBarLiOption>Home</NavBarLiOption>
                </Link>
                
                <Link to='/features' className='navigation-item-link'>
                <NavBarLiOption>Features</NavBarLiOption>
                </Link>
               
                <NavBarLiOption>Resources</NavBarLiOption>
                <NavBarLiOption>Tests</NavBarLiOption>
                <NavBarLiOption>Contact Us</NavBarLiOption>
            </NavBarOptionsList>
        </NavBarContent>
        </MainNavbar>
    )
}

export default Header