import {Component} from 'react'   
import Cookies from 'js-cookie';  
import {withRouter} from 'react-router-dom'; // Import withRouter
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
  ErroRMsg
} from './styledComponents';

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg:'',
    isLoginFailed:false
  }

  onSubmitSuccess = (jwtToken) => {
    const {history} = this.props;
    Cookies.set('jwt_token', jwtToken, {expires: 30});
    history.replace('/home'); // This should work now
  }

  onSubmitFailure=(errorMsg)=>{
    this.setState({
      errorMsg,
      isLoginFailed:true,
    })
    

  }
  

  onChangeUserName = (event) => {
    this.setState({username: event.target.value});
  }

  onChangePassword = (event) => {
    this.setState({password: event.target.value});
  }

  renderUserInputField = () => {
    const {username} = this.state;
    return (
      <>
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
      </>
    );
  }

  renderUserPasswordField = () => {
    const {password} = this.state;
    return (
      <>
        <UserPasswordContainer>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <UserPassword
            type='password'
            placeholder='password'
            id='password'
            value={password}
            onChange={this.onChangePassword}
          />
        </UserPasswordContainer>
      </>
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
    console.log(data);
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    }
    else{
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {errorMsg,isLoginFailed}=this.state
    return (
      <>
        <MainLoginContainer>
          <LoginImageContainer>
            <LoginPageImage src='https://img.freepik.com/premium-vector/man-sits-front-computer-with-shield-screen_960117-2151.jpg?w=1380'/>
            <LoginPageInfo>
              Log in to join a focused, secure classroom environment.<br/>
              Stay productive while ensuring your online activity remains<br/>
              aligned with classroom guidelines, enhancing your learning<br/>
              experience without distractions.
            </LoginPageInfo>
          </LoginImageContainer>
          <LoginPageContainer>
            <LoginForm onSubmit={this.onSubmitForm}>
              {this.renderUserInputField()}
              {this.renderUserPasswordField()}
              <LoginButton type='submit'>Login</LoginButton>
              {isLoginFailed && <ErroRMsg>*{errorMsg}</ErroRMsg> }
            </LoginForm>
            
          </LoginPageContainer>
        </MainLoginContainer>
      </>
    );
  }
}

export default withRouter(Login); // Wrap the component with withRouter
