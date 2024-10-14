import {Component} from 'react'   
import { BiSolidShow } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";
import Cookies from 'js-cookie';  
import {withRouter} from 'react-router-dom'; 
import {
  LoginPageContainer,
  LoginForm,
  UserInputText,
  InputLabel,
  UserInputTextContainer,
  UserPasswordContainer,
  UserPassword,
  LoginImageContainer,
  LoginPageImage,
  MainLoginContainer,
  LoginButton,
  LoginPageInfo,
  ErroRMsg,
  ShowPassordButton,
  UserPasswordItContainer
} from './styledComponents';

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg:'',
    isLoginFailed:false,
    showpassword:false
  }

  onSubmitSuccess = (jwtToken) => {
    const {history} = this.props;
    Cookies.set('jwt_token', jwtToken, {expires: 30});
    history.replace('/home');
  }

  onSubmitFailure=(errorMsg)=>{
    this.setState({
      errorMsg,
      isLoginFailed:true,
    });
  }
  
  onChangeUserName = (event) => {
    this.setState({username: event.target.value});
  }

  onChangePassword = (event) => {
    this.setState({password: event.target.value});
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      showpassword: !prevState.showpassword 
    }));
  }

  renderUserInputField = () => {
    const {username} = this.state;
    return (
      <UserInputTextContainer>
        <InputLabel htmlFor='username'>Username</InputLabel>
        <UserInputText
          type='text'
          placeholder='username'
          id='username'
          value={username}
          onChange={this.onChangeUserName}
        />
      </UserInputTextContainer>
    );
  }

  renderUserPasswordField = () => {
    const {password, showpassword} = this.state;
    return (
      <UserPasswordContainer>
        <UserPasswordItContainer>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <UserPassword
          type={showpassword ? 'text' : 'password'}
          placeholder='password'
          id='password'
          value={password}
          onChange={this.onChangePassword}
        />
        </UserPasswordItContainer>
        
         <ShowPassordButton type="button" onClick={this.onShowPassword}>
              {showpassword ? <BiSolidShow />: <GrFormViewHide/>}
            </ShowPassordButton>
      </UserPasswordContainer>
    );
  }

  onSubmitForm = async (event) => {
    event.preventDefault();
    const {username, password} = this.state;
    const userDetails = {username, password};
    const loginUrl = 'https://apis.ccbp.in/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(loginUrl, options);
    const data = await response.json();
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  }

  render() {
    const {errorMsg, isLoginFailed} = this.state;
    return (
      <MainLoginContainer>
        <LoginImageContainer>
          <LoginPageImage src='https://img.freepik.com/premium-vector/man-sits-front-computer-with-shield-screen_960117-2151.jpg?w=1380'/>
          <LoginPageInfo>
            Log in for a focused, secure classroom experience, <br/>staying productive and distraction-free within set guidelines.
          </LoginPageInfo>
        </LoginImageContainer>
        <LoginPageContainer>
          <LoginForm onSubmit={this.onSubmitForm}>
            {this.renderUserInputField()}
            {this.renderUserPasswordField()}
           
            <LoginButton type='submit'>Login</LoginButton>
            {isLoginFailed && <ErroRMsg>*{errorMsg}</ErroRMsg>}
          </LoginForm>
        </LoginPageContainer>
      </MainLoginContainer>
    );
  }
}

export default withRouter(Login);
