import MailService from "../../../requests_part/services/MailService";

export async function verifyMailNewAccount(email, code){
    try
    {
        const response = await MailService.verifyMail(email,code);
        console.log(response);
        return response.data.message;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        return e.response?.data?.detail;
    }
}

export async function sendCodeAuthAccount(){
    try
    {
        const response = await MailService.sendAuthMail();
        console.log(response);
        return response.data.message;

    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        return e.response?.data?.detail;
    }
}

export async function VerifyCodeAuthAccount(code){
    try
    {
        const response = await MailService.verifyAuthMail(code);
        console.log(response);
        return response.data.message;

    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        return e.response?.data?.detail;
    }
}