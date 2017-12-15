import UserAPI from '../apis/users'

export const search = ({commit}, name) => {
  UserAPI.search(name, (res) => {
    console.log(res)
  })
}