import { createRef } from 'react'
import {when} from "../../../../../../services/utils";

function ColumnForm({ onConfirm, onCancel }) {
    const inputColumnTitle = createRef()

    function addColumn(event) {
        event.preventDefault()

        when(inputColumnTitle.current.value)(onConfirm)
    }

    return (
        <div className='react-kanban-column' style={{ minWidth: '230px' }}>
            <form style={{ display: 'flex', justifyContent: 'space-between' }} onSubmit={addColumn}>
                <input type='text' ref={inputColumnTitle} autoFocus />
                <button type='submit'>Добавить</button>
                <button type='button' onClick={onCancel}>
                    Отмена
                </button>
            </form>
        </div>
    )
}

export default ColumnForm