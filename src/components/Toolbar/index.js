import React from 'react';
import { Link } from 'react-router/es6';
import './toolbar.scss';

export default () => (
  <nav className="navbar" role="navigation">
    <span className="companyName">Carderock</span>
    <span className="headerText">
	  <Link to="/">Business</Link>
	</span>
	<span className="headerText">
	  <Link to="/">People</Link>
	</span>
	<span className="headerText">
	  <Link to="/blog">Prices</Link>
	</span>
	<span className="headerText">
	  <Link to="/about">Marketing Report</Link>
	</span>
	<span className="headerText">
	  <Link to="/about">Social Media Marketing</Link>
	</span>
	<span className="headerText">
	  <Link to="/about">Web Analytics</Link>
	</span>
	<span className="headerText">
	  <Link to="/about">Dashboard</Link>
	</span>
	<span className="headerText">
	  <Link to="/about">Themes</Link>
	</span>
  </nav>
);
