import { UsersModel } from "../../model/users.model";

class SuperAdminAuthRepository {
  async register(item: UsersModel) {
    return UsersModel.query().insert(item);
  }
}

export default new SuperAdminAuthRepository();
