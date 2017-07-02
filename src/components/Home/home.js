/**
 * Created by Counter on 7/1/2017.
 */
/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'
import Header from '../Header/header'
import './home.css'
import {Link} from 'react-router-dom'
import * as actions from '../../actions/authActions'
import {connect} from 'react-redux'

export class Home extends Component{
    constructor(props){
        super(props);
        if(!localStorage.getItem('key')){
            this.props.history.push('/')
        }
    }

    componentWillReceiveProps(newProps){
        if(!newProps.isAuthenticated){
            this.props.history.push('/')
        }
    }
    render(){
        return(
            <div>
                <Header logout={this.props.logout}/>
                <section id="banner">
                    <div className="inner">
                        <h2>Magna Aliquam</h2>
                        <p>Sed lorem ipsum sed dolor nullam adipiscing</p>
                        <ul className="actions">
                            <li><input type="button" value="Learn More"/></li>
                        </ul>
                    </div>
                </section>

                <section id="one" className="wrapper style1">
                    <div className="container">
                        <header className="major">
                            <h2>Lorem ipsum dolor</h2>
                            <p>Ipsum dolor tempus commodo turpis adipiscing adipiscing in tempor placerat<br />
                                sed amet accumsan enim lorem sem turpis ut. Massa amet erat accumsan curae<br />
                                blandit porttitor faucibus in nisl nisi volutpat massa mi non nascetur.</p>
                        </header>
                    </div>
                </section>
                <footer id="footer">
                    <ul className="icons">
                        <li><a href="" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                        <li><a href="" className="icon fa-envelope"><span className="label">Envelope</span></a></li>
                    </ul>
                    <ul className="menu">
                        <li><a href="">FAQ</a></li>
                        <li> <Link to="/aboutus/profile">Profile</Link></li>
                        <li> <Link to="/aboutus/team">Team</Link></li>
                        <li> <Link to="/aboutus/contactus">Contact</Link></li>
                    </ul>
                    <span className="copyright">
					&copy; Copyright. All rights reserved
				</span>
                </footer>


            </div>

        )
    }
}
const mapStateToProps=(state)=>{


    return {
        isAuthenticated:state.auth.isAuthenticated
    }
}


export default connect(mapStateToProps,actions)(Home);
