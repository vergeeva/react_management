import AuthService from "../../../requests_part/services/AuthService";

export async function loginUser(login, password){
    try
    {
        const response = await AuthService.login(login,password);
        return response.data.message;
        // console.log(response);
    }
    catch (e)
    {
        // console.log(e.response?.data?.detail);
        return e.response?.data?.detail;
    }
}

export async function registerUser(user){
    try
    {
        const response = await AuthService.register(user);
        console.log(response);
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        return e.response?.data?.detail;
    }
}
export async function logoutUser(){
    try
    {
        const response = await AuthService.logout();
        // console.log(response);
    }
    catch (e)
    {
        // console.log(e.response?.data?.message);
        return e.response?.data?.detail;
    }
}

export async function refresh()
{
    try {

        const response = await AuthService.refresh_token();
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        return e.response?.data?.detail;
    }
}
