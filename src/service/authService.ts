
import { UsersModel } from "../model/users.model";
import authRepository from "../repository/authRepository";

class AuthService {
    async login(username:string) {
        return authRepository.login(username)
    }

    async register(payload: UsersModel) {
        const dataUser = await authRepository.register(payload);

        return {
            name: dataUser.name,
            username: dataUser.username,
            role: dataUser.role,
        }
    }
}

export default new AuthService()