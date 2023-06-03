import {refresh} from "../../../components/auth/functions/auth";
import BalanceCircleService from "../../services/BalanceCircleService";

export async function getAllStats(){
    try
    {
        const response = await BalanceCircleService.get_stats();
        return response.data.stats;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await getAllStats();
        }
        return e.response?.data?.detail;
    }
}

export async function insertStat(stat){
    try
    {
        const response = await BalanceCircleService.insert_stat(stat);
        return response.data;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await insertStat(stat);
        }
        return e.response?.data?.detail;
    }
}

export async function updateStat(stat){
    try
    {
        const response = await BalanceCircleService.update_stat(stat);
        console.log("Вызвано обновление");
        console.log(response.data);
        return response.data;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await updateStat(stat);
        }
        return e.response?.data?.detail;
    }
}

export async function deleteStat(idBalance){
    try
    {
        const response = await BalanceCircleService.delete_stat(idBalance);
        return response.data;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await deleteStat(idBalance);
        }
        return e.response?.data?.detail;
    }
}