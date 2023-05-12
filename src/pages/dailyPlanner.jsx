import React from 'react';
import Agenda from "../components/dailyPlanner/calendar";

const DailyPlanner = () => {
    return (
        <div>
            Ежедневник
            {
                Agenda.render()
            }
        </div>
    );
};

export default DailyPlanner;