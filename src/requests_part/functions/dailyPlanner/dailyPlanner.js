import {refresh} from "../../../components/auth/functions/auth";
import DailyPlannerService from "../../services/DailyPlannerService";

export async function getDailyPlanner(){
    try
    {
        const response = await DailyPlannerService.get_daily_planner();
        console.log(response);
        return response.data;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await getDailyPlanner();
        }
        return e.response?.data?.detail;
    }
}

export async function insertEntry(item){
    try
    {
        const response = await DailyPlannerService.insert_entry(item);
        console.log(response);
        return response.data;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await insertEntry(item);
        }
        return e.response?.data?.detail;
    }
}

export async function updateEntry(item){
    try
    {
        const response = await DailyPlannerService.update_entry(item);
        console.log(response);
        return response.data;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await updateEntry(item);
        }
        return e.response?.data?.detail;
    }
}


export async function deleteEntry(item){
    try
    {
        const response = await DailyPlannerService.delete_entry(item);
        console.log(response);
        return response.data;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await deleteEntry(item);
        }
        return e.response?.data?.detail;
    }
}