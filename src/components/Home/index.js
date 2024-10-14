import  {HomePageTitle,HomePageSection1,HomePageSubTitle,HomePageS1DataContent,HomePageS1Image,HomeContainer,HomePageSection2,HomePageS2Title} from './styledComponents'
import Header from '../Header'
const Home=()=>{
    return(
        <>
          <Header/>
        <HomeContainer>
        <HomePageSection1>
        <HomePageS1DataContent>
        <HomePageTitle>
        Build the Future of Safe and Productive Classrooms
        </HomePageTitle>
        <HomePageSubTitle>Enhancing Learning and Security Through Technology</HomePageSubTitle>
         
        </HomePageS1DataContent>
        <HomePageS1Image src='https://img.freepik.com/free-vector/students-with-computer-classroom-elements-white-background_1308-52052.jpg?t=st=1728107791~exp=1728111391~hmac=0c484eb3d714dbd6934d7450aadae8fcbb90b9069f3efc1b1b476f2bd4163e76&w=1380'/>
        </HomePageSection1>
        <HomePageSection2>
            <HomePageS2Title>How it Works</HomePageS2Title>
        </HomePageSection2>
        </HomeContainer>
       
        
        </>
    
    )
}

export default Home