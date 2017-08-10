import React from 'react';
const NavbarHome = () =>(
	<nav className="header-home navbar-fixed-top">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <a><i className="fa fa-phone"></i>1800-0000-000</a>
                </div>
                <div className="col-md-8">
                    <img src="img/logo2-dark.png"/>
                    <ul className="main-menu">
                        <li><a>On The Menu</a></li>
                        <li><a>Plan & Pricing</a></li>
                        <li><a>Learn More</a></li>     
                        <li><a>Gift</a></li>
                        <li><a>Refer A Friend</a></li>                                  
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul className="pull-right">
                        <li><a><i className="fa fa-user"></i>Login</a></li>
                        <li><a><i className="fa fa-unlock-alt"></i>Register</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
);

export default NavbarHome;
