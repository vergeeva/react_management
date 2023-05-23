import $api from "../http/index";

export default class ProfileService {
    static async get_user_data(){
        return $api.get('/api/users/me');
    }
    static async update_user_profile(user){
        return $api.put('/api/users/update_profile',
            {
                login: user.login,
                firstName: user.firstName,
                lastName: user.lastName,
                patronymic: user.patronymic,
                email: user.email
            });
    }

    static async update_user_password(password, passwordConfirm){
        return $api.put('/api/users/update_user_password',
            {password, passwordConfirm});
    }
}