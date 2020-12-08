import React from 'react';
import './topbar.css';

const Navbar = () => {
	return(
		<nav id="navbar" class="">
            <div class="nav-wrapper">
                <div class="logo">
                    <p href="#home">Frank's Planner</p>
                </div>
                <div class="profile" style={{display:"inline-flex"}}>
                    <div className="name">
                        <p>Frank Guerrero</p>
                    </div>
                    <div class="image">
                        <img src="https://robohash.org/Frank" width="40" height="40" alt="ava" />
                    </div>
                </div>
            </div>
        </nav>
	);
}

export default Navbar;