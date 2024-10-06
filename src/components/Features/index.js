import { Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import {FeaturesContainer,FeaturesMainDataContainer,FeaturesMainData,FeaturesMainImage,FeaturesListData,FeaturesListTitle} from './styledComponents'

import Header from "../Header";

const initialfeaturesList=[
    {   
        feature_id:uuidv4(),
        feature_title:'Real-Time Monitoring',
        feature_descripton:'Teachers and administrators can monitor student activity during class in real time, ensuring students remain focused on their tasks. Any attempts to access unauthorized websites are immediately logged and flagged.'
    },
    {
        feature_id:uuidv4(),
        feature_title:'Safe Learning Environment',
        feature_descripton:'Our system automatically blocks access to inappropriate or unauthorized sites, ensuring students are only accessing educational resources that enhance their learning experience.'
    },
    {
        feature_id:uuidv4(),
        feature_title:'Seamless Integration with Classroom Tools',
        feature_descripton:'Students can easily access course materials, assignments, and online resources, all while staying within the bounds of classroom guidelines.'
    },
    {
        feature_id:uuidv4(),
        feature_title:'Device Management',
        feature_descripton:'Manage which devices are allowed in the network, track usage, and enforce security policies to protect both the network and user data.'
    }
]


class Features extends Component{
    state={
       featureslist:initialfeaturesList
    }
    
  

    render(){
         
     
        return(
            <>
            <Header/>
            <FeaturesContainer>
                <FeaturesMainDataContainer>
                   <FeaturesMainImage src='https://img.freepik.com/free-vector/parental-control-software-abstract-concept-illustration_335657-3755.jpg?t=st=1728132900~exp=1728136500~hmac=fa3fdab0f3a48cf54f114cbd97f84caa8b68d44884d7d040a237d68d990e274a&w=1380' alt='features-main-image'/>
                   <FeaturesMainData>In today's tech-driven classrooms, the increasing use of personal devices presents both opportunities and challenges. Our platform ensures a secure, distraction-free environment by monitoring device usage, blocking unauthorized sites, and empowering educators to manage classroom activity effectively. With real-time oversight and integrated learning tools, we create a space where students can harness the benefits of digital education while staying focused and safe.</FeaturesMainData>
                </FeaturesMainDataContainer>
                <FeaturesListData>
                    <FeaturesListTitle>Empowering Safe Learning</FeaturesListTitle>
                </FeaturesListData>
            </FeaturesContainer>
            </>
       
        )
    }
}

export default Features