import { UsersModel } from "../model/users.model";

class UsersRepository {
    async getUsersLength() {
        return (await UsersModel.query()).length;
    }

    async findAll() {
        return UsersModel.query();
    }

    async findById(id: string) {
        return UsersModel.query().findById(id).select("id", "name", "username", "email", "role")
    }

    async findByUsername(username: string) {
        return UsersModel.query().findOne({username});
    }

    // async createAdmin(id: string, username: string, password: string, email: string, role: string) {
    //     return UsersModel.query().insert({id, username, password, email, role})
    // }

    // async deleteUser(id: string) {
    //     return UsersModel.query().deleteById(id);
    // }

    // async updateUser(id: string, username: string, password: string, email: string) {
    //     return UsersModel.query().findById(id).update({username, password, email})
    // }
}

export default new UsersRepository();