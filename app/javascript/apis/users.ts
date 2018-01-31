import axios, { AxiosResponse } from 'axios'
import User from '../src/types/user'

const URL = 'http://localhost:3000/api/users/search?name='

export default {
  search(name: string, callback: (any)){
    axios.get(URL+name)
      .then( (response) => {
        callback(response)
      })
      .catch( (err) => {
        console.log(err)
      })
  }
}