import '../kanban/components/styles.scss';
import React, {useState} from "react";
import Board from "./components/Board/Board";

const board = {
    columns: [
        {
            id: 456781,
            title: "Отложить",
            cards: [
                {
                    id: 1,
                    title: "Заголовок карточки",
                    description: "Контент"
                },
                {
                    id: 2,
                    title: "Купить гель-лак цвета хаки",
                    description: "Экономически невыгодно пока"
                },
                {
                    id: 3,
                    title: "Покрасить толстовку",
                    description: "Для начала ее неплохо будет постирать"
                }
            ]
        },
        {
            id: 2,
            title: "В процессе",
            cards: [
                {
                    id: 9,
                    title: "Реализовать доски канбан",
                    description: "подумать, как можно улучшить приложение"
                }
            ]
        },
        {
            id: 3,
            title: "Буду делать",
            cards: [
                {
                    id: 10,
                    title: "Написать вторую главу диплома",
                    description: "описать только что-то одно и кратко"
                },
                {
                    id: 11,
                    title: "Посмотреть урок по авторизации",
                    description: "Не использовать локальное хранилище"
                }
            ]
        },
        {
            id: 4,
            title: "Сделано",
            cards: [
                {
                    id: 12,
                    title: "Помыть посуду",
                    description: "Не забыть составить высохшую"
                },
                {
                    id: 13,
                    title: "Забрать очки на почте",
                    description: "Три пары очков"
                }
            ]
        }
    ]
};
function UncontrolledBoard() {
    return (
        <Board
            allowRemoveLane
            allowRenameColumn
            allowRemoveCard
            onLaneRemove={console.log}
            onCardRemove={console.log}
            onLaneRename={console.log}
            initialBoard={board}
            allowAddCard={{ on: "top" }}
            onNewCardConfirm={draftCard => ({
                id: new Date().getTime(),
                ...draftCard
            })}
            onCardNew={console.log}
        />
    );
}

function KanbanBoard() {
    return (
        <div className="kanbans">
            <UncontrolledBoard />
        </div>
    );
}

export default KanbanBoard;