import $api from "../http/index";

export default class DailyPlannerService {
    static async get_daily_planner(){ //Получение всех записей пользователя
        return $api.get('/api/entryDailyPlanner/DailyPlanner/entry_data');
    }

    static async insert_entry(item){ //Получение всех записей пользователя
        return $api.post('/api/entryDailyPlanner/insert_entry',{
            dailyTaskName: item.name,
            taskStart: item.startDateTime,
            taskEnd: item.endDateTime,
            taskColor: item.classes
        });
    }

    static async update_entry(item) { //Получение всех записей пользователя
        return $api.put(`/api/entryDailyPlanner/${item._id}`, {
            dailyTaskName: item.name,
            taskStart: item.startDateTime,
            taskEnd: item.endDateTime,
            taskColor: item.classes
        });
    }

    static async delete_entry(item){ //Получение всех записей пользователя
        return $api.delete(`/api/entryDailyPlanner/${item._id}`);
    }
}