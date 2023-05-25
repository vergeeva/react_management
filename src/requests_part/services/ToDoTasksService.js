import $api from "../http/index";

export default class ToDoTasksService {
    static async get_tasks(){
        return $api.get('/api/tasksList/tasks_in_list');
    }

    static async insert_task_in_list(new_task){
        return $api.post('/api/tasksList/insert_task_in_list', {
            "textOfItem": new_task.textOfItem,
            "isChecked": new_task.isChecked
        });
    }

    static async update_task_in_list(updated_task){

        return $api.put(`/api/tasksList/${updated_task.idTaskInList}`, {
            "textOfItem": updated_task.textOfItem,
            "isChecked": updated_task.isChecked
        });
    }

    static async delete_task_from_list(taskId){
        return $api.delete(`/api/tasksList/${taskId}`);
    }
}

