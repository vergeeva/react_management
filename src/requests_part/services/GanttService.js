import $api from "../http";


export default class GanttService {
    static async get_tasks(){ //Получение всех задач
        return $api.get('/api/ganttChartTasks/gantt_tasks_data');
    }

    static async insert_task(task)
    {
        return $api.post('/api/ganttChartTasks/insert_gantt_task', {
            nameOfTask: task.name
        });
    }

    static async update_task(task)
    {
        return $api.put(`/api/ganttChartTasks/${task.id}`, {
            nameOfTask: task.name
        });
    }

    static async delete_task(task)
    {
        return $api.delete(`/api/ganttChartTasks/${task.id}`);
    }
// ----------------------Длительность-----------------------------------------------
    static async get_durations(){ //Получение всех задач
        return $api.get('/api/ganttChartTasks/gantt_tasks_data');
    }

    static async insert_duration(idTask, duration)
    {
        return $api.post('/api/ganttChartTasks/insert_gantt_task', {
            start: new Date(duration.ganttTaskStart),
            end: new Date(duration.ganttTaskEnd)
        });
    }

    static async update_duration(duration)
    {
        return $api.put(`/api/ganttChartTasks/${duration.id}`, {
            start: new Date(duration.ganttTaskStart),
            end: new Date(duration.ganttTaskEnd)
        });
    }

    static async delete_duration(duration)
    {
        return $api.delete(`/api/ganttChartTasks/${duration.id}`);
    }
}