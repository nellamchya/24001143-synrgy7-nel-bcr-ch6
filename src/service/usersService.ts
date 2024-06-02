import usersRepository from "../repository/usersRepository";

class UsersService {
  async getAllUsers() {
    return usersRepository.findAll();
  }

  async getUserById(id: string) {
    return usersRepository.findById(id);
  }

  async getUserByUsername(username: string) {
    return usersRepository.findByUsername(username)
  }
}

export default new UsersService();
