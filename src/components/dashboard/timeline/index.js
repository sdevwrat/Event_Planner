import React from "react";
import './timeline.css';
import moment from "moment";
import EventCard from '../eventCard';
const monthName = ['january',"February","March","April","May","June","July","August","September","October","November","December" ];

const rand = require('random-seed').create();

export default class Timeline extends React.Component {



  render() {
    const {events} = this.props;
    const today = parseInt(moment().format("D"));
    const month = moment().format("MMMM");
    const year = parseInt(moment().format("Y"));
    let tableHead = [];
    {for(var i=today;i<today+10;i++){
        tableHead.push(
            <th>{i}</th>
        )
    }};
    let thisMonthEvent = this.props.events.filter(event => monthName[new Date(event.startDate).getMonth()] === month && new Date(event.startDate).getFullYear() === year);
    let tableBody = [];
    {for(let i=today;i<today+10;i++){
      let evt = thisMonthEvent.filter(event => new Date(event.startDate).getDate() === i);
        tableBody.push(
            <td style={{verticalAlign:"top"}}>
              {!!evt.length && evt.map((e,idx) =>{
                let rd;
                if(evt.length>1)
                   rd = rand(300);
                else
                  rd = rand(431);
                if(idx>0)
                  rd = 100;
                return(
                  <div style={{paddingTop:rd}} ><EventCard event={e} today = {today} syle={{margin:"100px"}} /></div>
                )
              })}
            </td>
        )
    }};
    return (
      <div className="timeline">
         <table>
            <tr>
                {tableHead}
            </tr>
            <tr style={{height:"550px"}}>
                {tableBody}
            </tr>
        </table> 
      </div>
    );
  }
}
