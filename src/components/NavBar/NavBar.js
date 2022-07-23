import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import {useState} from 'react';
import './Navbar.css';


function NavBar() {
  const [theme1, setTheme1] = useState('dark')
  const [theme2, setTheme2] = useState('dark')
  const [theme3, setTheme3] = useState('dark')

  const handleClickTheme1 = () => {
    setTheme1('dark')
    setTheme2('light')
    setTheme3('light')

  }
  const handleClickTheme2 = () => {
    setTheme1('light')
    setTheme2('dark')
    setTheme3('light')

  }
  const handleClickTheme3 = () => {
    setTheme1('light')
    setTheme2('light')
    setTheme3('dark')

  }
    return (
        <div className='container-fluid'>
            <Navbar color='primary' className='nav'>
             
              <NavbarBrand color='primary' className='navb text-light'>
                 <i className="fas fa-cannabis"></i>{'  '}
                <Link   
                className={theme1} onClick={handleClickTheme1} to='/staff' > <i className="fas fa-clipboard-user"></i> <small>Nhân Viên</small> </Link>{'  '}
                 <Link 
                 className={theme2} onClick={handleClickTheme2} to='department'  > <i className="fas fa-id-card-alt"></i> <small> Phòng Ban</small></Link> {'  '}
                <Link 
                className={theme3} onClick={handleClickTheme3} to='/salary'  ><i class="fa-solid fa-money-bill-1"></i><small>Bảng Lương</small></Link>
                </NavbarBrand>         
             
            </Navbar>
          
         
        </div>
    );
}

export default NavBar;