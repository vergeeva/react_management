import '../kanban/components/styles.scss';
import React, {useEffect, useState} from "react";
import Board from "./components/Board/Board";
import {getAllColumns} from "../../requests_part/functions/kanban/kanban";


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
function UncontrolledBoard(props) {
    return (
        <Board
            allowRemoveLane
            allowRemoveCard
            allowChangeCard
            allowRenameColumn
            onColumnRename={console.log}
            onLaneRemove={console.log}
            onCardRemove={console.log}
            onLaneRename={console.log}
            initialBoard={props.board}
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
    const [columns, setColumns] = useState([{}]);
    useEffect( () => {
        (async () => {
            const columns = await getAllColumns();

            await setColumns(columns);
            for (let i = 0; i < 4; i++) {
                board.columns[i].id = columns.columns[i].id;
                board.columns[i].title = columns.columns[i].title;
                board.columns[i].cards = columns.columns[i].cards;
                await console.log(board.columns[i]);
            }
            await console.log(board);
        })();
    },[]);

    return (
        <div className="kanbans">
            <UncontrolledBoard board={board}/>
        </div>
    );
}

export default KanbanBoard;