import React from 'react';
// import './Footer.css';


function Footer() {
    return (
      <div className="container-fluid footer pl-1 pr-1">
          <div className='row mt-5'>
            <div className="col-6 siba_left mt-3">
                <li><h5>Our Address</h5></li>
                <li>121, Clear Water Bay Road</li>
                <li>Ckear Water Bay, Kool noon</li>
                <li>HONGKONG</li>
                <li><i class="fas fa-tty"></i> : +0987654321</li>
                <li><i class="fas fa-envelope"></i>:hkthuong@gmail.com</li>
            </div>
            <div className="col-6 siba_right mt-3">
            <li><i class="fab fa-google-plus-g"></i></li>
            <li><i class="fab fa-facebook-square"></i></li>
            <li><i class="fas fa-intersection"></i></li>
            <li><i class="fab fa-youtube-square"></i></li>
            <li><i class="far fa-envelope"></i></li>
            <li></li>
            </div>
          
        </div>
        <div className='row text-center pt-1'> <p><i class="fad fa-at"></i>copyright 2006 ristoran con Fusion</p></div>
       
      </div>
    );
}

export default Footer;