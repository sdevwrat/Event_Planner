import React from 'react';
import {Row,Col} from 'reactstrap';
import './event.css'
import DotsHorizontalIcon from 'mdi-react/DotsHorizontalIcon'

const Navbar = (props) => {

    const bi_cnt = props.events.filter(event => event.category === 'Blog Infographic').length;
    const np_cnt = props.events.filter(event => event.category === 'Nike Project').length;
    const em_cnt = props.events.filter(event => event.category === 'Envato Meetups').length;
	return(
		<div className="event-container">
                    <Row className="event-name">
                        <Col xs={1} style={{paddingLeft:"15px",width:"5px"}}>
                            <div className="bullet bi"></div>
                        </Col>
                        <Col xs={6} className="desc">
                            <h6 className="desc-head">Blog Infographic</h6>
                            <p className="desc-subhead">{bi_cnt} Tasks</p>
                        </Col>
                        <Col style={{paddingTop:"6px"}}>
                            <DotsHorizontalIcon className="dot-icon"/>
                        </Col>
                    </Row>
                    <Row className="event-name">
                        <Col xs={1} style={{paddingLeft:"15px",width:"5px"}}>
                            <div className="bullet np"></div>
                        </Col>
                        <Col xs={6} className="desc">
                            <h6 className="desc-head">Nike Project</h6>
                            <p className="desc-subhead">{np_cnt} Tasks</p>
                        </Col>
                        <Col >
                        <DotsHorizontalIcon className="dot-icon"/>
                        </Col>
                    </Row>
                    <Row className="event-name">
                        <Col xs={1} style={{paddingLeft:"15px",width:"5px"}}>
                            <div className="bullet em"></div>
                        </Col>
                        <Col xs={6} className="desc">
                            <h6 className="desc-head">Envato Meetups</h6>
                            <p className="desc-subhead">{em_cnt} Tasks</p>
                        </Col>
                        <Col >
                        <DotsHorizontalIcon className="dot-icon"/>
                        </Col>
                    </Row>
        </div>
	);
}

export default Navbar;