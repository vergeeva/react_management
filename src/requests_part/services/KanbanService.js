import $api from "../http/index";

export default class KanbanService {
    static async getAllCards(){ //Получить все карточки
        return $api.get('/api/kanbanCards/kanban_cards');
    }
    static async createKanbanDesk(Board){
        console.log(Board);
        for (let i=0;i<4; i++)
        {
            await KanbanService.insertKanbanCard(Board.columns[i]);
        }
        // Добавить базовые карточки канбан
    }

    static async insertKanbanCard(Column){
        return $api.post(`/api/kanbanCards/insert_kanban_card`,
            {
                title: Column.title
            });

    }

    static async updateKanbanCard(Column, title)
    {
        return $api.put(`/api/kanbanCards/${Column.id}`,
            {
                title: title
            });
    }

    static async insertTaskToCard(ColumnId, Card)
    {
        return $api.post(`/api/taskInCards/insert_task/${ColumnId}`,
            {
                title: Card.title,
                description: Card.description
            });
    }

    static async updateTask(Card)
    {
        return $api.put(`/api/taskInCards/${Card.id}`,
            {
                title: Card.title,
                description: Card.description
            });
    }

    static async deleteTask(id)
    {
        return $api.delete(`/api/taskInCards/${id}`);
    }
}