import { Component } from "react";

import {ContactUsDataContainer,ContactUsMainContainer,ContactUsHeading,ContactusText,ContactusImage,ContactUsSection1} from './styledComponents';

import Header from "../Header";

class Contactus extends Component{
    render(){
        return(
           <>
           <Header/>
            <ContactUsMainContainer>
                <ContactUsSection1>
                <ContactUsDataContainer>
                <ContactUsHeading>Contact Us</ContactUsHeading>
                <ContactusText>Contact us to discuss enhancing safety, focus, and engagement in blended learning. We welcome educators, students, and parents to connect with us through the form or by calling our support line. This communication allows us to assist you promptly and gather insights for improvement.</ContactusText>
                </ContactUsDataContainer>
                <ContactusImage src='https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899134.jpg?t=st=1728395376~exp=1728398976~hmac=34b0c42675e78dcf056b8f680b8ebd851559f4a36eacdaa99509501b3faaa0d4&w=1800' alt='contact-us'/>
               
                </ContactUsSection1>
               
               
            </ContactUsMainContainer>
           </>
           
        )
    }
}

export default Contactus;