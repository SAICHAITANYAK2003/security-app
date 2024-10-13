import styled from "styled-components";

export const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 80%;
  background-color: #fff; /* Adjust this based on your design */
  z-index: 1000; /* Ensure it stays on top of other elements */
  margin-top:10px;
  margin-left:100px;
  border-radius:10px;

   
  
`;

export const MainNavbar=styled.nav`
  position:sticky;
  padding:10px;

   

`

export const NavBarContent=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`

export const NavBarLogo=styled.img`
  height:40px;
  padding-left:15px;
`

export const NavBarOptionsList=styled.ul`
 display:flex;
  flex-direction:row;
  justify-content:space-around;
  width:500px;
  list-style-type:none;
`

export const NavBarLiOption=styled.li`
  
`