import axios from 'axios'
const URL = 'http://localhost:3000/api/users/search?name='

export default {
  search(name, callback){
    axios.get(URL+name)
      .then( (response) => {
        callback(response)
      })
      .catch( (err) => {
        console.log(err)
      })
  }
}