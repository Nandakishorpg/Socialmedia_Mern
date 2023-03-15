import React from "react";
import { Row, Col } from "react-bootstrap";
import Side from "../../components/side/Side";
import Tweet from "../../components/Tweet/Tweet";

export default function Home() {
  return (
    <>
      <Row>
        <Col style={{pading:"0", borderRight: ".1px solid #D3D3D3",}} sm={3} lg={3}>
        <Side />
        
        </Col>
        <Col style={{borderRight:".1px solid #D3D3D3"}} sm={5} lg={5}>
          <Tweet/>
        </Col>
      </Row>
    </>
  );
}
