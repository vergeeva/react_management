import '../../styles/App.css';
import Timer from "./Timer";
import Settings from "./Settings";
import React, {useState} from "react";
import SettingsContext from "./SettingsContext";


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
