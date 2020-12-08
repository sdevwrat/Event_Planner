import React , { useState }from "react";
import {connect} from 'react-redux';
import moment from "moment";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./calendar.css";
import ChevronRightCircleIcon from 'mdi-react/ChevronRightCircleIcon';
import ChevronLeftCircleIcon from 'mdi-react/ChevronLeftCircleIcon';
import PlusThickIcon from 'mdi-react/PlusThickIcon'; 
import { addEvent } from "../../../actions/eventAction";

const monthName = ['january',"February","March","April","May","June","July","August","September","October","November","December" ];
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Calendar extends React.Component {
  weekdays = moment.weekdays(true);

  constructor(){
    super();
    this.state = {
      showCalendarTable: true,
      month:moment().format("MMMM"),
      year :moment().format("Y"),
      currentDay:moment().format("D"),
      dateObject: moment(),
      allmonths: moment.months(),
      selectedDay: null,
      modal:false,
      ...this.eventState
    };
  }

  eventState = {
    title:'',
    startDate:null,
    stopDate:null,
    desc:'',
    people:'Frank',
    category:'Blog Infographic'
  }

  toggle = () => this.setState({modal:!this.state.modal})

  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };
  year = () => {
    return this.state.dateObject.format("Y");
  };
  currentDay = () => {
    return this.state.dateObject.format("D");
  };
  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d"); // Day of week 0...1..5...6
    return firstDay;
  };
  month = () => {
    return this.state.dateObject.format("MMMM");
  };
  onPrev = () => {
    this.setState({
      dateObject: this.state.dateObject.subtract(1, 'month')
    });
  };
  onNext = () => {
    this.setState({
      dateObject: this.state.dateObject.add(1, 'month')
    });
  };
  handleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const {title,startDate,stopDate,desc,category,people} = this.state;
    this.props.addEvent({title,startDate,stopDate,desc,category,people});
    this.toggle();
    this.setState({...this.eventState});
  }
  render() {
    let weekdayshortname = this.weekdays.map(day => {
      return <th key={day}>{day.charAt(0)}</th>;
    });
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="calendar-day empty">{""}</td>);
    }
    let daysInMonth = [];
    let thisMonthEvent = this.props.events.filter(event => monthName[new Date(event.startDate).getMonth()] === this.month() && new Date(event.startDate).getFullYear() === parseInt(this.year()));
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = (parseInt(this.state.currentDay) === d && this.state.month === this.month() && this.state.year === this.year())?'today':"";
      let evt = thisMonthEvent.filter(event => new Date(event.startDate).getDate() === d);
      let evt_type = evt.length?(evt[0].category === 'Blog Infographic'?"event-bi":evt[0].category === 'Nike Project'?"event-np":"event-em"):"";
      daysInMonth.push(
        <td key={d} className={`calendar-day ${currentDay} ${evt_type}`}>
          <span> {d} </span>
        </td>
      );
    }
    let blockSize = ((this.firstDayOfMonth()==5 && this.daysInMonth() === 31) || (this.firstDayOfMonth()==6 && this.daysInMonth() >= 30))?42:35;
    let remainBlanks = [],remainSize = this.daysInMonth()+blanks.length;
    for (let i = remainSize; i <blockSize; i++) {
      remainBlanks.push(<td className="calendar-day empty">{""}</td>);
    }
    var totalSlots = [...blanks, ...daysInMonth,...remainBlanks];
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    let daysinmonth = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    const {title,startDate,stopDate,desc,category,people} = this.state;

    return (
      <div>
      <div className="tail-datetime-calendar">
        <div className="calendar-navi">
            <span onClick={e => {this.onPrev()}} class="calendar-button">< ChevronLeftCircleIcon /></span>
            <span className="calendar-label"> {this.month()} {this.year()}</span>
            <span onClick={e => { this.onNext()}}className="calendar-button">< ChevronRightCircleIcon/> </span>
        </div>
        <div className="calendar-date">
          <table className="calendar-day">
            <thead>
              <tr>{weekdayshortname}</tr>
            </thead>
            <tbody>{daysinmonth}</tbody>
          </table>
        </div>
        
      </div>
      <div className="event-create">
        <button className="event-btn" onClick ={this.toggle}> <PlusThickIcon size="20px" style={{margin:"0 5px 0 -1px"}}/>Create New</button>
       </div>
       <Modal isOpen={this.state.modal} toggle={this.toggle} >
        <ModalHeader toggle={this.toggle}>Add Event</ModalHeader>
        <ModalBody>
        <div className="addTask">
        <form onSubmit = {this.handleSubmit}>
          <label for="fname">Title</label>
          <input type="text" id="fname" value={title} name="title" placeholder="Title" onChange={this.handleChange} required/>

          <div style={{display:"inline-flex",padding:"0"}}>
            <div style={{marginRight:"8px",display:"inline-block"}}>
              <label for="startDate">Start Date</label>
              <input type="date" id="startDate" value={startDate} name="startDate"  onChange={this.handleChange} required/>
            </div>
            <div>
              <label for="stopDate">Stop Date</label>
              <input type="date" id="stopDate" name="stopDate" value={stopDate} min={startDate} onChange = {this.handleChange} required/>
            </div>  
          </div>

          <label for="desc">Description</label>
          <textarea type="desc" id="desc" value={desc} name="desc" placeholder="Description" onChange={this.handleChange} required/>

          <label for="category">category</label>
          <select id="category" name="category" value={category} onChange={this.handleChange} required>
            <option value="Blog Infographic" selected>Blog Infographic</option>
            <option value="Nike Project">Nike Project</option>
            <option value="Envato Meetups">Envato Meetups</option>
          </select>

          <label for="people">Add People</label>
          <select id="people" value={people} name="people" onChange={this.handleChange} required>
            <option value="Frank">Frank</option>
            <option value="devu">Devwrat</option>
            <option value="shivam">Shivam</option>
            <option value="keshav">Keshav</option>
          </select>
        
          <input type="submit" value="Submit" />
        </form>
      </div>
         </ModalBody>
      </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addEvent:(event)=> dispatch(addEvent(event))
})

export default connect(null,mapDispatchToProps)(Calendar);