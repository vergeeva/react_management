import $api from "../http/index";

export default class MailService {
    static async verifyMail(email, code){ //Верификация нового аккаунта
        return $api.post('/email/verify_mail_not_auth', {email, code});
    }

    static async sendAuthMail(){ // Отправка сообщения на почту уже авторизованного аккаунта
        return $api.get('/email/verify_profile');
    }

    static async verifyAuthMail(code){ // Отправка сообщения на почту уже авторизованного аккаунта
        return $api.get(`/email/verify_auth_code/${code}`);
    }
}