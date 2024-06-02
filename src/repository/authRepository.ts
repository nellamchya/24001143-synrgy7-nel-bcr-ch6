import { UsersModel } from "../model/users.model";

class AuthRepository {
  async login(username: string) {
    return UsersModel.query().findOne({ username });
  }

  async register(item: UsersModel) {
    return UsersModel.query().insert(item);
  }
}

export default new AuthRepository();
