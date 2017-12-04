import React, {Component} from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class BootstrapNavBar extends Component{
  render(){
    return(
      <Router>
    		<nav className="navbar navbar-default navbar-fixed-top">
    		  <div className="container-fluid">
    		    <div className="navbar-header">
    		      <a className="navbar-brand" href="#">Atlanta, GA</a>
    		    </div>
    		    <ul className="nav navbar-nav">
    		    	<li><Link to="/">Home</Link></li>
    		      	<li><Link to="/About">About</Link></li>
                <li><Link to="/two">Two</Link></li>
                <li><Link to="/three">Three</Link></li>
                <li><Link to="/four">Four</Link></li>

    		    </ul>
    		  </div>
    		</nav>
      </Router>
	)
  }
}

export default BootstrapNavBar
