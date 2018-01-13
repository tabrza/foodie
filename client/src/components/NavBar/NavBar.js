import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return <a className="navbar-brand" href="/auth/google"> Sign In With Google </a>
      default:
       return (
         <div>
           <a className="navbar-brand" href="/api/current_user"> Profile </a>
           <a className="navbar-brand" href="/api/logout"> Logout </a>
         </div>
       )
    }
  }

  user(){
    return this.props.auth ? 'Logged in as ' + this.props.auth.name : ''
  }

  render() {
    return(
      <nav className="NavBar">
        <div className="navbar navbar-expand-sm navbar-dark bg-secondary mb-5">
          <Link className="navbar-brand" to="/">Foodie</Link>
          <Link className="navbar-brand" to="/"> Products </Link>
          {this.renderContent()}
          {this.user()}
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavBar);
