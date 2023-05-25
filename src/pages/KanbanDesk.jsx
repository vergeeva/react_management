import React, {useState} from 'react';
import KanbanBoard from "../components/kanban/kanban";


const KanbanDesk = () => {

    return (
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: "15px"}}>
            <KanbanBoard/>
        </div>
    );


};

export default KanbanDesk;