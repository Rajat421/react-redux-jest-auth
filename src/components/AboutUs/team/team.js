/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'

import './team.css'
import member from '../../../static/images/member.jpg'

class Team extends Component{
    render(){
        console.log(this.props);
        return(
            <div>

                <section className="team section_padding">
                    <h3 className="heading_h3">Team</h3>

                    <div className="team_container">
                        <div className="single_member">
                            <figure>
                                <img src={member} alt=""/>
                            </figure>
                            <h4 className="membername">Larry Page</h4>
                            <h6 className="designation">Co-Founder of Google</h6>
                        </div>
                        <div className="single_member">
                            <figure>
                                <img src={member} alt=""/>
                            </figure>
                            <h4 className="membername">Larry Page</h4>
                            <h6 className="designation">Co-Founder of Google</h6>
                        </div>
                        <div className="single_member">
                            <figure>
                                <img src={member} alt=""/>
                            </figure>
                            <h4 className="membername">Larry Page</h4>
                            <h6 className="designation">Co-Founder of Google</h6>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Team

