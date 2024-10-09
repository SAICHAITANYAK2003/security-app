import { Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import {FeaturesContainer,FeaturesMainDataContainer,FeaturesMainData,FeaturesMainImage,FeaturesListData,FeaturesListTitle,FeatureLiItem,FeatureLiItemHeading,FeatureLiItemDescription,FeatureImage} from './styledComponents'

import Header from "../Header";

const initialfeaturesList=[
    {   
        feature_id:uuidv4(),
        feature_title:'Real-Time Monitoring',
        feature_image:'https://img.freepik.com/free-vector/business-audit-financial-specialist-cartoon-character-with-magnifier-examination-statistical-graphic-information-statistics-diagram-chart_335657-834.jpg?t=st=1728388270~exp=1728391870~hmac=44bc389aa3ffabeb3787330a51d609dd48f5f023c94b4da3b9f16f869f0ce862&w=1380',
        feature_descripton:'Teachers and administrators monitor student activity in real-time, flagging unauthorized website access to maintain focus.'
    },
    {
        feature_id:uuidv4(),
        feature_title:'Safe Learning Environment',
        feature_image:'https://img.freepik.com/free-vector/kids-studying-online_23-2148506552.jpg?t=st=1728388769~exp=1728392369~hmac=2cc75bb215fae0f3254078fbdf35e66a7f7f140aaf0803b162146f28b91c130b&w=1800',
        feature_descripton:'Our system blocks unauthorized sites, ensuring students access only educational resources.'
    },
    {
        feature_id:uuidv4(),
        feature_title:'Seamless Integration with Classroom Tools',
        feature_image:'https://img.freepik.com/free-vector/hand-drawn-web-design-concept_23-2147839736.jpg?t=st=1728389116~exp=1728392716~hmac=336f102b0535e6632cfa6b2920b9e2deadcb689f799d6eb9659871371e0610ae&w=1380',
        feature_descripton:'Students access course materials, assignments, and resources while adhering to classroom guidelines.'
    },
    {
        feature_id:uuidv4(),
        feature_title:'Device Management',
        feature_image:'https://img.freepik.com/free-vector/data-protection-concept-laptop-with-files-connection-shiled-sign_613284-974.jpg?t=st=1728389299~exp=1728392899~hmac=5c2573e4119e77ec593c9e5f4e213e95ce7fd9e967384ea5822b25917b79c6be&w=1800',
        feature_descripton:'Manage which devices are allowed in the network, track usage, and enforce security policies to protect both the network and user data.'
    }
]


class Features extends Component{
    state={
       featureslist:initialfeaturesList
    }
    
  

    render(){
         const {featureslist}=this.state;
        
     
        return(
            <>
            <Header/>
            <FeaturesContainer>
                <FeaturesMainDataContainer>
                   <FeaturesMainImage src='https://img.freepik.com/free-vector/parental-control-software-abstract-concept-illustration_335657-3755.jpg?t=st=1728132900~exp=1728136500~hmac=fa3fdab0f3a48cf54f114cbd97f84caa8b68d44884d7d040a237d68d990e274a&w=1380' alt='features-main-image'/>
                   <FeaturesMainData>In today's tech-driven classrooms, the increasing use of personal devices presents both opportunities and challenges. Our platform ensures a secure, distraction-free environment by monitoring device usage, blocking unauthorized sites, and empowering educators to manage classroom activity effectively. With real-time oversight and integrated learning tools, we create a space where students can harness the benefits of digital education while staying focused and safe.</FeaturesMainData>
                </FeaturesMainDataContainer>
                <FeaturesListTitle>Empowering Safe Learning</FeaturesListTitle>
                <FeaturesListData>
                   
                    {
                        featureslist.map((eachFeature)=>(
                            <FeatureLiItem>
                                <FeatureImage src={eachFeature.feature_image} alt='feature-image'/>
                               <FeatureLiItemHeading> {eachFeature.feature_title}</FeatureLiItemHeading>
                               <FeatureLiItemDescription>{eachFeature.feature_descripton}</FeatureLiItemDescription>
                            </FeatureLiItem>
                        ))
                    }
                </FeaturesListData>
            </FeaturesContainer>
            </>
       
        )
    }
}

export default Features