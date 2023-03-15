import React from "react";
import { Row, Col } from "react-bootstrap";
import SearchBtn from "../../components/Right/SearchBtn";
import Whatshappening from "../../components/Right/Whatshappening";
import Side from "../../components/side/Side";
import Tweet from "../../components/Tweet/Tweet";

export default function Home() {

 const name="nandhu"
  return (
    <>
      <Row>
        <Col style={{pading:"0", borderRight: ".1px solid #f7f4f4",}} sm={3} lg={3}>
        <Side />
        
        </Col>
        <Col style={{borderRight:".1px solid #f7f4f4"}} sm={5} lg={5}>
          <Tweet/>
        </Col>
        <Col sm={4} lg={4}>
          <SearchBtn name={name}/>

          <Row>
            <Whatshappening/>
          </Row>
        </Col>


      </Row>
    </>
  );
}
