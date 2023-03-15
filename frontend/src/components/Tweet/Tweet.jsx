import { AutoAwesomeTwoTone, Photo } from "@mui/icons-material";
import { Button, Input } from "@mui/material";
import React from "react";
import { Row ,Col,Container} from "react-bootstrap";
import './tweet.css'

export default function Tweet() {
  return (
    <div className="tweet">
      <div style={{paddingTop:"1rem"}}>
      <Row>
        <Col className="text-start">
          <span>
            <b><h4>Home</h4> </b>
          </span>
        </Col>
        <Col className="text-end">
            <div style={{color:"Blue"}}>
            <AutoAwesomeTwoTone/>
            </div>
     
        </Col>
      </Row>
      <Row className="tweet-rowBtn-Row" style={{borderBottom:"1px solid #D3D3D3"}}>
        <Col style={{paddingTop:"1.5rem"}} className="tweet-rowBtn"> <span>For you</span> </Col>
        <Col style={{paddingTop:"1.5rem"}}  className="tweet-rowBtn"> <span>Following</span> </Col>
        
       
      </Row>
      <Row style={{borderBottom:"1px solid #D3D3D3"}} className="tweet-addNew">
        <Row className="tweet-addnew-write">

            <Col lg={1}><img src="" alt="" /></Col>
            <Col style={{textAlign:"start"}} lg={11}>
            

            <input placeholder="Write something" type="text" />
            </Col>
        </Row>
        <Row className="tweet-addnew-emojies">
        <Photo/>
        </Row>
      </Row>
      </div>
    </div>
  );
}
