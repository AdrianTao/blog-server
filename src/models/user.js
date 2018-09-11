import { User } from '../lib'

export default {
  getUserByName (username) {
    return User.findOne({username: username})
  }
}