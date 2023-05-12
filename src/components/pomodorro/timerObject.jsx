import '../../styles/App.css';
import Timer from "./Timer";
import Settings from "./Settings";
import React, {useState} from "react";
import SettingsContext from "./SettingsContext";




const board = {
    columns: [
        {
            id: 1,
            title: "Отложить",
            cards: [
                {
                    id: 1,
                    title: "Card title 1",
                    description: "Card content"
                },
                {
                    id: 2,
                    title: "Card title 2",
                    description: "Card content"
                },
                {
                    id: 3,
                    title: "Card title 3",
                    description: "Card content"
                }
            ]
        },
        {
            id: 2,
            title: "В процессе",
            cards: [
                {
                    id: 9,
                    title: "Card title 9",
                    description: "Card content"
                }
            ]
        },
        {
            id: 3,
            title: "Буду делать",
            cards: [
                {
                    id: 10,
                    title: "Card title 10",
                    description: "Card content"
                },
                {
                    id: 11,
                    title: "Card title 11",
                    description: "Card content"
                }
            ]
        },
        {
            id: 4,
            title: "Сделано",
            cards: [
                {
                    id: 12,
                    title: "Card title 12",
                    description: "Card content"
                },
                {
                    id: 13,
                    title: "Card title 13",
                    description: "Card content"
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
function PomodoroObject()
{
    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(60);
    const [breakMinutes, setBreakMinutes] = useState(15);
    return (
        <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
    }}>
        {showSettings ? <Settings /> : <Timer />}
    </SettingsContext.Provider>
    )
}

function PomodoroTimer() {
  return (
          <div className="pomodoro-wrapper">
              <div className="pomodoro-timer">
                  <PomodoroObject />
              </div>
          </div>
  );
}



export default PomodoroTimer;
