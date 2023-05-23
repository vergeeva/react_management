import ProfileService from "../../services/ProfileService";
import {refresh} from "../../../components/auth/functions/auth";

export async function getUserProfile(){
    try
    {
        const response = await ProfileService.get_user_data();
        return response.data;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await getUserProfile()
        }
        return e.response?.data?.detail;
    }
}

export async function updateUserProfile(user){
    try
    {
        const response = await ProfileService.update_user_profile(user);
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await updateUserProfile(user)
        }
        return e.response?.data?.detail;
    }
}

export async function updateUserPassword(password, passwordConfirm){
    try
    {
        const response = await ProfileService.update_user_password(password, passwordConfirm);
        console.log(response);
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await updateUserPassword(password, passwordConfirm)
        }
        return e.response?.data?.detail;
    }
}