import $api from "../http";


export default class GanttService {
    static async get_tasks(){ //Получение всех задач
        return $api.get('/api/ganttChartTasks/gantt_tasks_data');
    }

    static async insert_task(taskName)
    {
        return $api.post('/api/ganttChartTasks/insert_gantt_task', {
            nameOfTask: taskName
        });
    }

    static async update_task(idTask, taskName)
    {
        return $api.put(`/api/ganttChartTasks/${idTask}`, {
            nameOfTask: taskName
        });
    }

    static async delete_task(taskId)
    {
        return $api.delete(`/api/ganttChartTasks/${taskId}`);
    }
// ----------------------Длительность-----------------------------------------------
    static async get_duration(taskId){ //Получение длительностей всех задач
        return $api.get(`/api/ganttChartTaskDuration/gantt_durations_data/${taskId}`);
    }

    static async insert_duration(taskDuration)
    {
        return $api.post(`/api/ganttChartTaskDuration/insert_duration/${taskDuration.task}`, {
            ganttTaskStart: taskDuration.start,
            ganttTaskEnd: taskDuration.end
        });
    }

    static async update_duration(duration)
    {
        return $api.put(`/api/ganttChartTaskDuration/${duration.id}`, {
            ganttTaskStart: duration.start,
            ganttTaskEnd: duration.end,
            ganttTaskId: duration.task
        });
    }

    static async delete_duration(duration)
    {
        return $api.delete(`/api/ganttChartTaskDuration/${duration.id}`);
    }
}