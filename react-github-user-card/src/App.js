import React from 'react'
import axios from 'axios'
// import SearchBar from './components/SearchBar'
import FetchFollowers from './fetchFollowers'

class App extends React.Component {
  state = {
    user: '',
    name: '',
    bio: '',
    followers: [],
    followersCount: '',
    image: ''
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/juancaruizc')
    .then((res) => {
      console.log(res.data)
      this.setState({...this.state,
        name: res.data.name,
        bio: res.data.bio,
        followersCount: res.data.followers,
        image: res.data.avatar_url
      })
      axios.get('https://api.github.com/users/juancaruizc/followers')
      .then((res) => {
        console.log('followers data',res.data)
        this.setState({...this.state,
          followers: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      user: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then((res) => {
      this.setState({
        name: res.data.name,
        bio: res.data.bio,
        followersCount: res.data.followers,
        image: res.data.avatar_url
      })
    })
    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
    .then((res) => {
      console.log('followers data',res.data)
      this.setState({...this.state,
        followers: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  render(){
    return (
      <div className="App">
        <h1>Github User Fetcher</h1>
        <form>
          <input
          type = 'text'
          onChange = {this.handleChange}
          >
          </input>
          <button onClick = {this.handleClick}>get user</button>
        </form>
          <div>
            <img src = {this.state.image} alt = '' width='120'/>
            <h1>{this.state.name}</h1>
             <p>{(this.state.bio) ? this.state.bio : 'No Bio'}</p>
            <p>{this.state.followersCount}</p>
          </div>
          <div>
          {
            this.state.followers.map((follower) => (
              <div key = {follower.id}>
                <img src = {follower.avatar_url} alt = ''/>
                <h2>{follower.login}</h2>
              </div>
               
            ))
          }
          </div>
      </div>
    );
  }
}

export default App;
