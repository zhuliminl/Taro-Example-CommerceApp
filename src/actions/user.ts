import { USER_INFO } from '../constants/user'

export const getUser = (token) => {
  return {
    type: USER_INFO,
    token,
  }
}
