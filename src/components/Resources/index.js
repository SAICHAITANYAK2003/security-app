import { Component} from "react";

import {ResourcesMainContainer,ResourcesImage,ResourcesText} from './styledComponents';

import Header from "../Header";

class Resources extends Component{
    render(){
        return(
            <>
            <Header/>
             <ResourcesMainContainer>
                <ResourcesImage src='https://img.freepik.com/free-vector/development-typographic-header-presenting-content-web-pages-website-layout-composition-color-development-idea-computer-technology-flat-vector-illustration_613284-2493.jpg?t=st=1728392466~exp=1728396066~hmac=4de8f0a599f51f876378748216da013febb28f1549327a66279aac5cefbc35f5&w=1800'/>
                <ResourcesText>In Developement Process....</ResourcesText>
            </ResourcesMainContainer>
        
            </>
        )
    }
}

export default Resources;