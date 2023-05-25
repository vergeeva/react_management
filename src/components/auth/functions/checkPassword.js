import AuthService from "../../../requests_part/services/AuthService";
import ProfileService from "../../../requests_part/services/ProfileService";



export async function checkOldPassword(oldPassword){
    try
    {
        const response = await ProfileService.validate_old_password(oldPassword);
        console.log(response);
        return response.data.statusPassword;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        return e.response?.data?.detail;
    }
}
