// @flow
import React, { Component } from 'react';
import moment from 'moment';
import ReactAgenda from './elements/reactAgenda.js';
import ReactAgendaCtrl from './elements/reactAgendaCtrl.js';
import Modal from './elements/Modal/Modal.js';
import './style.css';
import {
    deleteEntry,
    getDailyPlanner,
    insertEntry,
    updateEntry
} from "../../requests_part/functions/dailyPlanner/dailyPlanner";

const now = new Date();

require('moment/locale/ru.js');
const colors = {
    'color-1': "rgb(212,157,246)",
    "color-2": "rgb(234,243,110)",
    "color-3": "rgba(245,140,124,0.88)",
    "color-4": "rgb(125,201,248)",
    "color-5": "rgb(246,135,200)",
    "color-6": "rgb(189,246,135)"
};

function convertData(date){
    const offset = Math.abs(new Date().getTimezoneOffset() / 60);
    date.setHours(date.getHours() + offset);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());
}
export function getItems(){
    const items = [];
    getDailyPlanner().then(r => {
        for (let i=0;i<r?.entries?.length; i++)
        {
            items.push({
                _id: r.entries[i].idEntry,
                name: r.entries[i].dailyTaskName,
                classes: r.entries[i].taskColor,
                startDateTime: convertData(new Date(r.entries[i].taskStart)),
                endDateTime: convertData(new Date(r.entries[i].taskEnd))
            })
        }
    })
    return items;
}

const items = getItems();


export default class Agenda extends Component {
    constructor(props){
        super(props);

        this.state = {
            items:props.items,
            selected:[],
            cellHeight:(60 / 4),
            showModal:false,
            locale:"ru",
            rowsPerHour:4,
            numberOfDays:4,
            startDate: new Date()
        }
        this.handleRangeSelection = this.handleRangeSelection.bind(this)
        this.handleItemEdit = this.handleItemEdit.bind(this)
        this.zoomIn = this.zoomIn.bind(this)
        this.zoomOut = this.zoomOut.bind(this)
        this._openModal = this._openModal.bind(this)
        this._closeModal = this._closeModal.bind(this)
        this.addNewEvent = this.addNewEvent.bind(this)
        this.removeEvent = this.removeEvent.bind(this)
        this.editEvent = this.editEvent.bind(this)
        this.changeView = this.changeView.bind(this)
        this.handleCellSelection = this.handleCellSelection.bind(this)

    }

    componentDidMount (){ // присваиваем состоянию массив элементов
        this.setState({items:items})
    }
    componentWillReceiveProps(next , last){
        if(next.items){

            this.setState({items:next.items})
        }
    }
    handleItemEdit(item, openModal) { // для редактирования элемента

        if(item && openModal === true){
            this.setState({selected:[item] })
            return this._openModal();
        }
    }
    handleCellSelection(item, openModal) { // Выделение ячейки

        if(this.state.selected && this.state.selected[0] === item){
            return  this._openModal();
        }
        this.setState({selected:[item] })

    }
    zoomIn(){ // Увеличить масштаб
        const num = this.state.cellHeight + 15;
        this.setState({cellHeight:num})
    }
    zoomOut(){ // Уменьшить масштаб
        const num = this.state.cellHeight - 15;
        this.setState({cellHeight:num})
    }
    handleDateRangeChange (startDate, endDate) {
        console.log("Смена даты для отображения");
        this.setState({startDate:startDate })

    }
    handleRangeSelection (selected) { // Выделение диапазона
        this.setState({selected:selected , showCtrl:true})
        this._openModal();

    }
    _openModal(){ // Открытие модального окна
        this.setState({showModal:true})
    }
    _closeModal(e){ // Для закрытия окна
        if(e){ // Убираем обновление страницы
            e.stopPropagation();
            e.preventDefault();
        }
        this.setState({showModal:false})
    }

    handleItemChange(items , item){ // Меняем элемент
        console.log("Перетащили элемент, отправить запрос на сервер");
        updateEntry(item).then(r => {
            item._id = r?.idEntry;
        });
        console.log(item)
        this.setState({items:items})
    }

    handleItemSize(items , item){ // Если меняется размер элемента, длительность
        console.log("Изменили длительность задачи, нужно отправить на сервер");
        updateEntry(item).then(r => r);
        console.log(item)
        this.setState({items:items})

    }
    removeEvent(items , item){ // Удаление элемента
        console.log("Удалили, отправить запрос на сервер");
        console.log(item);
        deleteEntry(item).then(r => r);
        this.setState({ items:items});
    }
    async addNewEvent(items, newItems) { // добавить новый
        for (let i = 0; i < items.length; i++) {
            if (items[i]._id === newItems._id) {
                const response = await insertEntry(newItems);
                console.log(items[i]._id);
                items[i]._id = response?.idEntry;
                console.log(items[i]._id);
            }
        }
        console.log()
        this.setState({showModal: false, selected: [], items: items});
        this._closeModal();
    }
    editEvent (items , item){ // Редактировать событие

        this.setState({showModal:false ,selected:[] , items:items});
        console.log("Отредактировали в модальном окне, отправить на сервер");
        console.log(item);
        updateEntry(item).then(r => r);
        this._closeModal();
    }
    changeView (days , event ){ // Изменить количество дней для отображения
        this.setState({numberOfDays:days})
    }
    render() {

        const AgendaItem = function (props) {
            console.log(' item component props', props)
            return <div style={{display: 'block', position: 'absolute', background: '#FFF'}}>{props.item.name}
                <button onClick={() => props.edit(props.item)}>Изменить</button>
            </div>
        };
        return (

            <div className="content-expanded ">

                <div className="control-buttons">
                    <button  className="button-control" onClick={this.zoomIn}> <i className="zoom-plus-icon"></i> </button>
                    <button  className="button-control" onClick={this.zoomOut}> <i className="zoom-minus-icon"></i> </button>
                    <button  className="button-control" onClick={this._openModal}> <i className="schedule-icon"></i> </button>
                    <button  className="button-control" onClick={this.changeView.bind(null , 7)}> {moment.duration(7, "days").humanize()}  </button>
                    <button  className="button-control" onClick={this.changeView.bind(null , 4)}> {moment.duration(4, "days").humanize()}  </button>
                    <button  className="button-control" onClick={this.changeView.bind(null , 3)}> {moment.duration(3, "days").humanize()}  </button>
                    <button  className="button-control" onClick={this.changeView.bind(null , 1)}> {moment.duration(1, "day").humanize()} </button>
                </div>

                <ReactAgenda
                    minDate={new Date(now.getFullYear(), now.getMonth()-3)}
                    maxDate={new Date(now.getFullYear(), now.getMonth()+3)}
                    startDate={this.state.startDate}
                    startAtTime={0}
                    endAtTime={24}
                    cellHeight={this.state.cellHeight}
                    locale="ru"
                    items={this.state.items}
                    numberOfDays={this.state.numberOfDays}
                    headFormat={"ddd DD MMM"}
                    rowsPerHour={this.state.rowsPerHour}
                    itemColors={colors}
                    helper={true}
                    view="calendar"
                    autoScale={false}
                    fixedHeader={true}
                    onRangeSelection={this.handleRangeSelection.bind(this)}
                    onChangeEvent={this.handleItemChange.bind(this)}
                    onChangeDuration={this.handleItemSize.bind(this)}
                    onItemEdit={this.handleItemEdit.bind(this)}
                    onCellSelect={this.handleCellSelection.bind(this)}
                    onItemRemove={this.removeEvent.bind(this)}
                    onDateRangeChange={this.handleDateRangeChange.bind(this)} />
                {
                    this.state.showModal? <Modal clickOutside={this._closeModal} >
                        <div className="modal-content">
                            <ReactAgendaCtrl items={this.state.items} itemColors={colors} selectedCells={this.state.selected} Addnew={this.addNewEvent} edit={this.editEvent}  />
                        </div>
                    </Modal>:''
                }


            </div>

        );
    }
}