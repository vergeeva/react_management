import ToDoTasksService from "../../services/ToDoTasksService";
import {refresh} from "../../../components/auth/functions/auth";

export async function getAllTasks(){
    try
    {
        const response = await ToDoTasksService.get_tasks();
        return response.data.items;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await getAllTasks()
        }
        return e.response?.data?.detail;
    }
}

export async function insertTaskInList(new_task){
    try
    {
        const response = await ToDoTasksService.insert_task_in_list(new_task);
        return response.data;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await insertTaskInList(new_task)
        }
        return e.response?.data?.detail;
    }
}


export async function updateTaskInList(updated_task){
    try
    {
        const response = await ToDoTasksService.update_task_in_list(updated_task);
        console.log(response.data);
        return response.data;
    }
    catch (e)
    {
        console.log(e.response);
        if (e.response?.status === 401)
        {
            await refresh();
            await updateTaskInList(updated_task);
        }
        return e.response?.data;
    }
}

export async function deleteTaskFromList(taskId){
    try
    {
        const response = await ToDoTasksService.delete_task_from_list(taskId);
        return response.data.items;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await deleteTaskFromList(taskId)
        }
        return e.response?.data?.detail;
    }
}