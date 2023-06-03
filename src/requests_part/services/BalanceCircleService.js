import $api from "../http";

export default class BalanceCircleService {
    static async get_stats(){ //Получение всех записей пользователя
        return $api.get('/api/balanceCircle/circle_data');
    }
    static async insert_stat(stat){ //Получение всех записей пользователя
        return $api.post('/api/balanceCircle/insert_value',stat);
    }
    static async update_stat(stat){ //Получение всех записей пользователя
        return $api.put(`/api/balanceCircle/${stat.idBalance}`, stat);
    }
    static async delete_stat(idBalance){ //Получение всех записей пользователя
        return $api.delete(`/api/balanceCircle/${idBalance}`);
    }
}