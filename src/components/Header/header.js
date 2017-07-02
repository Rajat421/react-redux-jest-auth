
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'

class Header extends Component{
    render(){
        return(
            <header className="header">
                <ul>
                    <li> <Link to="/home">Home</Link></li>
                    <li> <Link to="/aboutus">About</Link>
                        <ul>
                            <li><Link to="/aboutus/profile">Profile</Link></li>
                            <li><Link to="/aboutus/team">Team</Link></li>
                            <li><Link to="/aboutus/contactus">Contact</Link></li>
                        </ul>
                    </li>
                    <li><i className="fa fa-user fa-lg" aria-hidden="true"></i>
                        <ul>
                            <li onClick={this.props.logout}>Logout</li>
                        </ul>
                    </li>
                </ul>
            </header>

        )
    }
}

export default Header

