import { cssStyles } from "./style.js";

export function createHtmlContentFragment() {
    let todayData = new Date();
    todayData = todayData.toISOString().slice(0, 10);
    const content = `
  <style>
    ${cssStyles()}
  </style>

  <div id="gantt-container">

      <div class="title">
        <h1> Диаграмма Ганта</h1>
      </div>

      <div id="gantt-grid-container">
        <div id="gantt-grid-container__tasks"></div>
        <div id="gantt-grid-container__time"></div>
      </div>

      <div id="add-forms-container">
         
          <div class="inner-form-container">
              
                <form id="add-task">
                  <h1>Добавить задачу</h1>                  
                  <div><input placeholder="Введите задачу" type="text"></div>
                  <button type="submit">
                    Добавить
                  </button>
                </form>
       
        
                
                <form id="add-task-duration">
                    <h1>Добавить длительность</h1>
                    <div class="inner-form-container">
                        <fieldset >
                          <label for="select-task">Выберите</label>
                          <select id="select-task" name="select-task"></select>
                        </fieldset>
                        <fieldset id="date" >
                          <label for="start-date">Начало:</label>
                          <input type="date" id="start-date" name="start-date"
                              value=${todayData}
                              min=${todayData} max="2050-12-31"
                          >
                    
                          <label for="end-date"> Окончание:</label>
                          <input type="date" id="end-date" name="end-date"
                            value=${todayData}
                            min=${todayData} max="2050-12-31"
                          >
                        </fieldset>
                    </div>
                    <button>
                      Добавить
                    </button>
                </form>
               
            </div>
          
          <div class="tracker-period">                 
              <h1 >Отображать период</h1>
              <div>
                  <div id="settings">
                      <fieldset id="select-from">
                          <legend>От</legend>
                          <select id="from-select-month" name="from-select-month"></select>
                          <select id="from-select-year" name="from-select-year"></select>
                      </fieldset>
                
                      <fieldset id="select-to">
                          <legend>До</legend>
                          <select id="to-select-month" name="to-select-month"></select>
                          <select id="to-select-year" name="to-select-year"></select>
                      </fieldset>
                  </div>
              </div>
           </div>
      <div>
  </div>
  `;

    // turn the HTML string into a document fragment
    const contentFragment = document
        .createRange()
        .createContextualFragment(content);
    return contentFragment;
}
