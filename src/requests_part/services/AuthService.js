import $api from "../http/index";

export default class AuthService {
    static async login(login, password){
        return $api.post('/api/auth/login', {login, password});
    }

    static async register(user){
        return $api.post('/api/auth/register',
            {
                firstName: user.firstName,
                lastName: user.lastName,
                patronymic: user.patronymic,
                email: user.email,
                login: user.login,
                password: user.password,
                passwordConfirm: user.passwordConfirm
            });
    }

    static async logout(){
        return $api.get('/api/auth/logout');
    }

    static async refresh_token(){
        return $api.get('/api/auth/refresh');
    }

}