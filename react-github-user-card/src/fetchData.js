import axios from 'axios'

const FetchData = (username) => {
    return axios.get(`https://api.github.com/users/${username}`)
    .then((res) => {

        return res.data
    })
    .catch((err) => {
        console.log(err)
    })
}

export default FetchData;