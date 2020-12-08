import React from 'react';
import Calendar from './calendar';
import Event from './Event';
import './dashboard.css';
import {connect} from 'react-redux';
import Timeline from './timeline'

class Dashboard extends React.Component {

	render(){
        return(
            <div className="dashboard" style={{display:"flex",alignContent:"flex-start"}}>
                <div>
                    <Calendar events = {this.props.events}/>
                    <Event events = {this.props.events}/>
                </div>
                <div >
                     <Timeline events = {this.props.events} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
  events:state.events
});


export default connect(mapStateToProps)(Dashboard);