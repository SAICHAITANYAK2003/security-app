import styled from "styled-components";

export const FeaturesContainer=styled.div``

export const FeaturesMainDataContainer=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
`

export const FeaturesMainData=styled.p`
  font-size:15px;
  line-height:25px;
  text-align:left;
  width:50%;
`

export const  FeaturesMainImage=styled.img`
  height:400px;
`

export const FeaturesListData=styled.ul`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  list-style-type:none;
  flex-wrap:wrap;
  padding-top:30px;
  
`

export const FeatureLiItem=styled.li`
  width:200px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding:15px;
  border-radius:10px;
`

export const FeatureLiItemHeading=styled.h1`
  font-family:'Roboto';
  font-size:15px;
  font-weight:550;
`

export const FeaturesListTitle=styled.h1`
  font-family:"PT Serif", serif;
  font-size:23px;
  padding-left:50px;
`

export const FeatureLiItemDescription=styled.p`
  font-family:'Roboto';
  font-size:14px;
  color:#8f8d8d;
  line-height:20px;
  overflow-y:auto;
`

export const FeatureImage = styled.img`
  height:150px;
  width:100%;
  
`;
