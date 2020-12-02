import axios from 'axios'

const FetchData = (username) => {
    return axios.get(`https://api.github.com/users/juancaruizc`)
    .then((res) => {

        return res.data
    })
    .catch((err) => {
        console.log(err)
    })
}

export default FetchData;