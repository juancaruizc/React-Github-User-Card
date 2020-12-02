import React from 'react'
import Styled from 'styled-components'
import fetchData from './fetchData'

const StyledImg = Styled.img`
  border-radius:10px;
  width:90%;
`

const StyledDiv2 = Styled.div`
display:flex;
justify-content:center;
`

const StyledDiv = Styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  justify-content:space-evenly;
  margin-top:5%;
  background-color:#00FF00;
  padding:3%;
  width:50%;
  border-radius:10px;
`

const StyledData = Styled.div`
  flex-direction: column;
`
const StyledText = Styled.h3`
  font-size:0.8rem;
`

const StyledH2 = Styled.h2`
  font-size:1.2rem;
`
const StyledH1 = Styled.h1`
  text-align:center;
`

const StyledImgDiv = Styled.div`
  width:35%;
  height:90%;
`

const StyledForm = Styled.form`
 justify-content:center;
 display:flex;
 margin-top:5%;
`

const StyledButton = Styled.button`
 border-radius:8px;
 border:none;
padding:4%;
width:70%;
`

const StyledFormDiv = Styled.div`
 display:flex;
 justify-content:space-evenly;

`

class App extends React.Component {
  state = {
    gitHubData: {},
    input: ''
  }

  componentDidMount() {
    fetchData('juancaruizc')
        .then((res)=>{
          console.log(res)
            this.setState({
              gitHubData: res
            });
        });
}

onChange = (e) => {
  console.log(this.state.input)
  this.setState({
      input:e.target.value
  });
} 

onSubmit = (e) => {
  e.preventDefault();
  fetchData(this.state.input)
      .then(res=>{
          this.setState({
              gitHubData: res
          })
      });
}

  render() {
    return (
      <div className="App">
        
        <StyledH1>Github User Card</StyledH1>
        <StyledFormDiv>
        <StyledForm >
                    <input 
                        value={this.state.input}
                        placeholder='Enter Username'
                        onChange={this.onChange}
                    />
                <StyledButton onClick={this.onSubmit}>Search</StyledButton>
                </StyledForm>
        </StyledFormDiv>
               
                      <StyledDiv2>
                      <StyledDiv>
                        <StyledImgDiv>
                          <StyledImg src = {this.state.gitHubData.avatar_url} alt = {this.state.gitHubData.name}/>
                        </StyledImgDiv>
                        <StyledData>
                          <StyledH2>{this.state.gitHubData.name}</StyledH2>
                          <StyledText>Username: {this.state.gitHubData.login}</StyledText>
                          <StyledText>Bio: {this.state.gitHubData.bio}</StyledText>
                          <StyledText>Location: {this.state.gitHubData.location}</StyledText>
                          <StyledText>Followers: {this.state.gitHubData.followers}</StyledText>
                          <StyledText>Following: {this.state.gitHubData.following}</StyledText>
                          </StyledData>
                      </StyledDiv>
                      </StyledDiv2>
                    ))
                
   
     </div>
    );
  }
}

export default App;