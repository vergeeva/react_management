import {refresh} from "../../../components/auth/functions/auth";
import KanbanService from "../../services/KanbanService";
import Column from "../../../components/kanban/components/Board/components/Column";

export async function getAllColumns(){
    try
    {
        const response = await KanbanService.getAllCards();
        if (response.data.columns.length === 0)
        {
            let board = {
                columns: [
                    {
                        id: 1,
                        title: "Отложить",
                        cards: []
                    },
                    {
                        id: 2,
                        title: "В процессе",
                        cards: []
                    },
                    {
                        id: 3,
                        title: "Буду делать",
                        cards: []
                    },
                    {
                        id: 4,
                        title: "Сделано",
                        cards: []
                    }
                ]
            };
            await CreateKanbanDesk(board);
            const repeat = await KanbanService.getAllCards();
            await console.log(`Создались карточки ${response.data.columns.length}`);
            return repeat;
        }
        else
        {
            await console.log(`Карточки уже созданы: ${response.data.columns.length}`);
            await console.log(response.data);
            return response.data;
        }
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await getAllColumns()
        }
        return e.response?.data?.detail;
    }
}

export async function CreateKanbanDesk(Board){
    try
    {
        const response = await KanbanService.createKanbanDesk(Board);
        console.log(response);
        return response.data.columns;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await CreateKanbanDesk(Board)
        }
        return e.response?.data?.detail;
    }
}

export async function updateKanbanCard(Column, title){
    try
    {
        const response = await KanbanService.updateKanbanCard(Column, title);
        console.log(response);
        return response.data;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await updateKanbanCard(Column)
        }
        return e.response?.data?.detail;
    }
}

export async function insertTaskToCard(ColumnId, Card){
    try
    {
        const response = await KanbanService.insertTaskToCard(ColumnId, Card);
        console.log(response);
        return response.data;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await insertTaskToCard(ColumnId, Card)
        }
        return e.response?.data?.detail;
    }
}

export async function updateTask(Card){
    try
    {
        const response = await KanbanService.updateTask(Card);
        console.log(response);
        return response.data;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await updateTask(Card)
        }
        return e.response?.data?.detail;
    }
}

export async function deleteTask(TaskId){
    try
    {
        const response = await KanbanService.deleteTask(TaskId);
        console.log(response);
        return response.data;
    }
    catch (e)
    {
        console.log(e.response?.data?.detail);
        if (e.response?.status === 401)
        {
            await refresh();
            await deleteTask(TaskId);
        }
        return e.response?.data?.detail;
    }
}