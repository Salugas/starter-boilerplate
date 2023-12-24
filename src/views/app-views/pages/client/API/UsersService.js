import axios from "axios"

export default class UsersService {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      )
      return response.data
    } catch (error) {}
  }

  static async getUserById(id) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      )
      return response.data
    } catch (error) {}
  }
}
