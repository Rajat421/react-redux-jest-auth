/**
 * Created by Counter on 6/29/2017.
 */
import React ,{Component} from 'react'
import Profile from './profile/profile'
import Team from './team/team'
import Contact from './contactus/contactus'
import Header from '../Header/header'
import {connect} from 'react-redux'
import * as actions from '../../actions/authActions'

class AboutUs extends Component {
    constructor(props){
        super(props)
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
        console.log(this.props.match.path,'-----',"/aboutus")
        return(
            <div>
                <Header logout={this.props.logout}/>
                {(this.props.location.pathname==="/aboutus")?<div>
                < h2 style={{textAlign:'center'}}><u>About Us</u></h2>
                    <Profile/>
                    <Team/>
                    <Contact/>
                    </div>:null
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>{


    return {
        isAuthenticated:state.auth.isAuthenticated
    }
}
// const mapDispatchToProps=(dispatch)=>{
//     return {
//
//         logout:()=>{
//             dispatch(logout())
//         }
//     }
// }

export default connect(mapStateToProps,actions)(AboutUs);
