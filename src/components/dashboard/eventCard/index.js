import React from 'react';
import {Row,Col} from 'reactstrap';
import DotsHorizontalIcon from 'mdi-react/DotsHorizontalIcon'
import './eventCard.css';


const EventCard = (props) => {
    const monthName = ['jan',"Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec" ];
    const stopDate = new Date(props.event.stopDate).getDate();
    const stopMonth = new Date(props.event.stopDate).getMonth();
    const startDate = new Date(props.event.startDate).getDate();
    const startMonth = new Date(props.event.startDate).getMonth();
    let maxDate = stopDate;
    if(stopMonth !== startMonth)
        maxDate = 50
    const size = Math.min((maxDate-startDate),(props.today+10-startDate))*100;
    let evt_type = props.event.category === 'Blog Infographic'?"event-bi":(props.event.category === 'Nike Project'?"event-np":"event-em");
	return(
		<nav className="event-card" style={{width:size}}>
            <div class="event-wrap">
                <div className={`event-desc ${evt_type}`}>
                    <p className="event-desc-head">{props.event.title}</p>
                    <p className="event-desc-subhead">{monthName[startMonth]} {startDate} - {monthName[stopMonth]} {stopDate}</p>
                </div>
                <div class="event-profile">
                    <div class="event-image">
                        <img src={`https://robohash.org/${props.event.people}`} width="40" height="40" alt="ava" />
                    </div>
                </div>
            </div>
        </nav>
	);
}

export default EventCard;