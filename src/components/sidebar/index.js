import React from "react";
import moment from "moment";
import "./sidebar.css";
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
import FireIcon from 'mdi-react/FireIcon';
import LayersTripleIcon from 'mdi-react/LayersTripleIcon';
import CreditCardIcon from 'mdi-react/CreditCardIcon';
import ForumIcon from 'mdi-react/ForumIcon';
import CogIcon from 'mdi-react/CogIcon';
import FilePresentationBoxIcon from 'mdi-react/FilePresentationBoxIcon';
import FileTableBoxOutlineIcon from 'mdi-react/FileTableBoxOutlineIcon';
export default class Sidebar extends React.Component {
  render() {
    return (
      <nav id="side-nav">
        <div className = 'logo' style={{marginBottom:"70%"}}>
          <p class="nav-link"><FireIcon style={{color:"red"}} className="nav-icon" size="35px"/></p>
        </div>
        <div class="nav-list">
          <p class="nav-link" style={{backgroundColor:"red",borderRadius:"5px",color:"white"}}><CalendarBlankIcon className="nav-icon" size="20px"/></p>
          <p class="nav-link"><LayersTripleIcon className="nav-icon" size="20px"/></p>
          <p class="nav-link"><FilePresentationBoxIcon className="nav-icon" size="20px"/></p>
          <p class="nav-link"><CreditCardIcon className="nav-icon" size="20px"/></p>
          <p class="nav-link"><ForumIcon className="nav-icon" size="20px"/></p>
          <p class="nav-link"><FileTableBoxOutlineIcon className="nav-icon" size="20px"/></p>
        </div>
        <div className = 'cog'>
          <p class="nav-link"><CogIcon className="nav-icon" size="20px"/></p>
        </div>
      </nav>
    );
  }
}
