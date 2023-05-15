import React from 'react';
import KanbanBoard from "../components/kanban/kanban";

const KanbanDesk = () => {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
           <KanbanBoard/>
        </div>
    );
};

export default KanbanDesk;