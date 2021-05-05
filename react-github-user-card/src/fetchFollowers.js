import axios from 'axios'
import React from 'react'

const fetchFollowers = (username) => {
    return axios.get(`https://api.github.com/users/${username}/followers`)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        console.log(err)
    })
}

export default fetchFollowers
