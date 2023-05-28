import {refresh} from "../../../components/auth/functions/auth";
import GanttService from "../../services/GanttService";

export async function getTasks(){
    try
    {
        const response = await GanttService.get_tasks();
        console.log(response);
        const tasks =[];
        for (let i=0;i<response.data.GanttTasks.length; i++)
        {
            tasks.push({id: response.data.GanttTasks[i].idGanttTask, name: response.data.GanttTasks[i].nameOfTask});
            await console.log({id:response.data.GanttTasks[i].idGanttTask, name: response.data.GanttTasks[i].nameOfTask});
        }
        await console.log(tasks);
        return tasks;
    }
    catch (e)
    {
        if (e.response?.status === 401)
        {
            if (!await refresh() === "Please provide refresh token")
            {
                await getTasks();
                return e.response?.data?.detail;
            }
        }
    }
}


export async function insertTask(taskName){
    try
    {
        const response = await GanttService.insert_task(taskName);
        console.log(response);
        return {id: response?.data?.idGanttTask, name: response?.data?.nameOfTask};
    }
    catch (e)
    {
        if (e.response?.status === 401)
        {
            if (!await refresh() === "Please provide refresh token")
            {
                await insertTask();
                return e.response?.data?.detail;
            }
        }
    }
}

export async function updateTask(idTask, taskName){
    try
    {
        const response = await GanttService.update_task(idTask, taskName);
        console.log(response);
        return {id: response?.data?.idGanttTask, name: response?.data?.nameOfTask};
    }
    catch (e)
    {
        if (e.response?.status === 401)
        {
            if (!await refresh() === "Please provide refresh token")
            {
                await updateTask();
                return e.response?.data?.detail;
            }
        }
    }
}

export async function delete_task(idTask){
    try
    {
        const response = await GanttService.delete_task(idTask);
        console.log(response);
        return response;
    }
    catch (e)
    {
        if (e.response?.status === 401)
        {
            if (!await refresh() === "Please provide refresh token")
            {
                await delete_task();
                return e.response?.data?.detail;
            }
        }
    }
}

export async function getDurations(tasks){
    try
    {
        let durations = [];
        for (let i=0;i<tasks.length;i++)
        {
            const response = await GanttService.get_duration(tasks[i].id);
            for (let j=0;j<response.data.durations.length;j++)
            {
                durations.push(
                    {
                        id: response.data.durations[j].idGanttDuration,
                        start: new Date(response.data.durations[j].ganttTaskStart),
                        end: new Date(response.data.durations[j].ganttTaskEnd),
                        task: tasks[i].id,
                    }
                )
            }

        }
        await console.log("Длительности:");
        await console.log(durations);
        return durations;
    }
    catch (e)
    {
        if (e.response?.status === 401)
        {
            if (!await refresh() === "Please provide refresh token")
            {
                await getDurations();
                return e.response?.data?.detail;
            }
        }
        console.log(e);
    }
}

export async function insertDuration(taskDuration){
    try
    {
        const response = await GanttService.insert_duration(taskDuration);
        return {
            id: response?.data?.idGanttDuration,
            start: new Date(response?.data?.ganttTaskStart),
            end: new Date(response?.data?.ganttTaskEnd),
            task: taskDuration.task
        };
    }
    catch (e)
    {
        console.log(e);
        if (e.response?.status === 401)
        {
            if (!await refresh() === "Please provide refresh token")
            {
                await insertDuration();
                return e.response?.data?.detail;
            }
        }
    }
}

export async function updateDuration(duration){
    try
    {
        const response = await GanttService.update_duration(duration);
        return {
            id: duration.id,
            start: new Date(response?.data?.ganttTaskStart),
            end: new Date(response?.data?.ganttTaskEnd),
            task: response?.data?.ganttTaskId
        };
    }
    catch (e)
    {
        console.log(e);
        if (e.response?.status === 401)
        {
            if (!await refresh() === "Please provide refresh token")
            {
                await updateDuration();
                return e.response?.data?.detail;
            }
        }
    }
}

export async function deleteDuration(taskDurationToDelete){
    try
    {
        return await GanttService.delete_duration(taskDurationToDelete);
    }
    catch (e)
    {
        if (e.response?.status === 401)
        {
            if (!await refresh() === "Please provide refresh token")
            {
                await deleteDuration();
                return e.response?.data?.detail;
            }
        }
    }
}