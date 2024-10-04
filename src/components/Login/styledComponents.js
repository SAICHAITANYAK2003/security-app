import styled from 'styled-components'

export const LoginPageContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
`



export const LoginForm=styled.form`
 
  height:50vh;
  width:35vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding-left:40px;
  border-radius:20px;
`

export const UserInputTextContainer=styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  margin-bottom:20px;

`

export const UserInputText=styled.input`
 height:30px;
 width:250px;
 border:1px solid #c7c5c5;
 outline:none;
 border-radius:5px;
`

export const InputLabel=styled.label`
  font-size:14px;
  font-weight:500;
  margin-bottom:5px;
`

export const UserPasswordContainer=styled.div`
 display:flex;
  flex-direction:column;
  align-items:flex-start;
  margin-bottom:20px;
`

export const UserPassword=styled.input`
 height:30px;
 width:250px;
 border:1px solid #c7c5c5;
 outline:none;
 border-radius:5px;
`

export const LoginImageContainer=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
`

export const LoginPageImage=styled.img`
  height:250px;
`

export const MainLoginContainer=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
`

export const LoginButton=styled.button`
  margin-top:10px;
  height:35px;
  width:260px;
  border:none;
  background-color:#256ef5;
  color:#fff;
  border-radius:5px;
  cursor:pointer;

`

export const LoginPageInfo=styled.p``