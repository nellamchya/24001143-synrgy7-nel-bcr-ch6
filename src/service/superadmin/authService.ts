import { UsersModel } from "../../model/users.model";
import authRepository from "../../repository/superadmin/authRepository"

class SuperAdminAuthService {
    async register(payload: UsersModel) {
        const dataUser = await authRepository.register(payload);

        return {
            name: dataUser.name,
            username: dataUser.username,
            role: dataUser.role,
        }
    }
}

export default new SuperAdminAuthService()