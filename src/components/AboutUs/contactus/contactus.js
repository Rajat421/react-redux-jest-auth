/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'

import './contactus.css'

class ContactUs extends Component{
    render(){
        return(
            <div>
                <section className="contactus section_padding" style={{display:'table',paddingTop:'47px'}}>
                    <h3 className="heading_h3">Contact Us</h3>

                    <p className="text_paragraphs">
                        Get in Touch!<br/>
                        We are here to answer any questions you may have about our experiences.
                        Reach out to us and we’ll respond as soon as we can.
                        <br/>
                            We are available anytime for a Talk. So, Just stop by for a cup of coffee.
                    </p>


                    <div className="contactform">
                        <form action="" method="" name="">
                            <input type="text" name="name" placeholder="Enter Your Name"/>
                                <input type="text" name="useremail" placeholder="Enter Email Address"/>
                                    <textarea placeholder="Enter Message"></textarea>
                                    <input type="submit" value="SEND"/>
                        </form>
                    </div>
                </section>

            </div>

        )
    }
}
export default  ContactUs
