// @flow
import React, { Component } from 'react';
import moment from 'moment';
// import { ReactAgenda , ReactAgendaCtrl, guid , getUnique , getLast , getFirst , Modal } from './elements/index';
import ReactAgenda from './elements/reactAgenda.js';
import ReactAgendaCtrl from './elements/reactAgendaCtrl.js';
import Modal from './elements/Modal/Modal.js';
import {guid , getUnique , getLast , getFirst } from './elements/helpers.js';
import './style.css';

var now = new Date();

require('moment/locale/ru.js');
var colors= {
    'color-1':"rgb(212,157,246)" ,
    "color-2":"rgb(234,243,110)" ,
    "color-3":"rgba(253,106,81,0.88)" ,
    "color-4":"rgb(125,201,248)",
    "color-5":"rgb(246,135,200)"
}


var items = [
    {
        _id            :guid(),
        name          : 'Задача 1',
        startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0),
        endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0),
        classes       : 'color-1 color-4'
    },
    {
        _id            :guid(),
        name          : 'Задача 2',
        startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 11, 0),
        endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 13, 0),
        classes       : 'color-2'
    },
    {
        _id            :guid(),
        name          : 'Задача 3',
        startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 11 , 0),
        endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 14 ,30),
        classes       : 'color-4'
    },
    {
        _id            :'event-4',
        name          : 'Очень интересно',
        startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+2, 10, 0),
        endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+2, 15, 0),
        classes       : 'color-3'

    },
    {
        _id           :'event-5',
        name          : 'Что-то еще',
        startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+3, 10, 0),
        endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+3, 16, 30),
        classes       : 'color-4'
    },
    {
        _id           :'event-6',
        name          : 'Задачка',
        startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+7, 9, 14),
        endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+7, 17),
        classes       : 'color-3'
    }
];

export default class Agenda extends Component {
    constructor(props){
        super(props);

        this.state = {
            items:[],
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

    componentDidMount(){

        this.setState({items:items})
    }
    componentWillReceiveProps(next , last){
        if(next.items){

            this.setState({items:next.items})
        }
    }
    handleItemEdit(item, openModal) {

        if(item && openModal === true){
            this.setState({selected:[item] })
            return this._openModal();
        }
    }
    handleCellSelection(item, openModal) {

        if(this.state.selected && this.state.selected[0] === item){
            return  this._openModal();
        }
        this.setState({selected:[item] })

    }
    zoomIn(){
        var num = this.state.cellHeight + 15
        this.setState({cellHeight:num})
    }
    zoomOut(){
        var num = this.state.cellHeight - 15
        this.setState({cellHeight:num})
    }
    handleDateRangeChange (startDate, endDate) {
        this.setState({startDate:startDate })

    }
    handleRangeSelection (selected) {


        this.setState({selected:selected , showCtrl:true})
        this._openModal();

    }
    _openModal(){
        this.setState({showModal:true})
    }
    _closeModal(e){
        if(e){
            e.stopPropagation();
            e.preventDefault();
        }
        this.setState({showModal:false})
    }

    handleItemChange(items , item){

        this.setState({items:items})
    }

    handleItemSize(items , item){

        this.setState({items:items})

    }
    removeEvent(items , item){

        this.setState({ items:items});
    }
    addNewEvent (items , newItems){

        this.setState({showModal:false ,selected:[] , items:items});
        this._closeModal();
    }
    editEvent (items , item){

        this.setState({showModal:false ,selected:[] , items:items});
        this._closeModal();
    }
    changeView (days , event ){
        this.setState({numberOfDays:days})
    }
    render() {

        var AgendaItem = function(props){
            console.log( ' item component props' , props)
            return <div style={{display:'block', position:'absolute' , background:'#FFF'}}>{props.item.name} <button onClick={()=> props.edit(props.item)}>Изменить</button></div>
        }
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
                    //itemComponent={AgendaItem}
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