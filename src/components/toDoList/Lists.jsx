import React, {useState} from 'react';
import MySelect from "../UI/Select/MySelect";
//idUserList
//nameOfList
const Lists = () => {
    const options = [
        {idUserList:'1234', nameOfList: 'Список продуктов'},
        {idUserList:'4321', nameOfList: 'Список одежды в путешествие'},
    ]
    const tasksInList = {
        idTaskInList: Date.now().toLocaleString(),
        textOfItem: "задача",
        isChecked: false
    }
    const [lists, setLists] = useState('');


    return (
        <div>
            <MySelect
                options={options}
                onChange={()=> {}}
            >
            </MySelect>
            <div>
                <todoList tasksFromList={}/>
            </div>
        </div>
    );
};

export default Lists;