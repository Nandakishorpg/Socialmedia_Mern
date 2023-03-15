import {
  AssignmentOutlined,
  AutoAwesomeTwoTone,
  BrowseGallery,
  Collections,
  GifBoxOutlined,
  LocationOnOutlined,
  Photo,
  PhotoAlbum,
  SentimentSatisfiedAltOutlined,
  SimCardAlert,
} from "@mui/icons-material";
import { Button, Input } from "@mui/material";
import {React,useState} from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import Numberoftweets from "./Numberoftweets";
import "./tweet.css";

export default function Tweet() {

 

 
  return (
    <div className="tweet">
      <div style={{ paddingTop: "1rem" }}>
        <Row>
          <Col className="text-start">
            <span>
              <b>
                <h4>Home</h4>{" "}
              </b>
            </span>
          </Col>
          <Col className="text-end">
            <div style={{ color: "#1DA1F2" }}>
              <AutoAwesomeTwoTone />
            </div>
          </Col>
        </Row>
        <div>
          <Row
            className="tweet-rowBtn-Row"
            style={{ borderBottom: "1px solid #f7f4f4" }}
          >
            <Col style={{ paddingTop: "1.5rem" }} className="tweet-rowBtn">
              {" "}
              <span>For you</span>{" "}
            </Col>
            <Col style={{ paddingTop: "1.5rem" }} className="tweet-rowBtn">
              {" "}
              <span>Following</span>{" "}
            </Col>
          </Row>
        </div>

        <div>
          <Row
            style={{ borderBottom: "1px solid #f7f4f4" }}
            className="tweet-addNew"
          >
            <Row style={{ height: "6rem" }} className="tweet-addnew-write">
              <Col style={{ paddingTop: "10px" }} lg={2}>
                <Image
                  style={{ width: "90%", height: "70%", borderRadius: "" }}
                  src="/assets/images/propic.jpg"
                  alt=""
                  roundedCircle
                />
              </Col>
              <Col style={{ textAlign: "start", paddingLeft: "0" }} lg={10}>
                <input
                  className="tweet-write_input"
                  style={{ height: "100%", width: "100%" }}
                  placeholder="Whats happening?"
                  type="text"
                />
              </Col>
            </Row>
            <Row style={{ paddingBottom: ".5rem"}}  className="tweet-addnew-emojies">
              <Col lg={2}></Col>
              <Col
                className="text-start Col-flex flex-row gap-5 tweet-addnew-emojies-col"
                lg={7}
              >
                <div
                  className="d-flex tweet-emojies gap-3 text-start"
                  style={{ color: "#1DA1F2" }}
                >
                  <Collections />
                  <GifBoxOutlined />
                  <SentimentSatisfiedAltOutlined />
                  <AssignmentOutlined />
                  <LocationOnOutlined />
                </div> 
              </Col>
              <Col  lg={3}>
              <Button style={{backgroundColor:"var(--main-color)",width:"80%",color:"white",borderRadius:"30px"}}>
                Tweet 
              </Button>
              </Col>
            </Row>
          </Row>
          <Row style={{borderBottom:".1px solid #f7f4f4"}}>
            <Numberoftweets />
          </Row>
        </div>
      </div>
    </div>
  );
}
