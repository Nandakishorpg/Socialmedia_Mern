import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SearchBtn from "../../components/Right/SearchBtn";
import Whatshappening from "../../components/Right/Whatshappening";
import Side from "../../components/side/Side";
import Tweet from "../../components/Tweet/Tweet";

export default function Home() {
  const name = "nandhu";
  return (
    <>
      <Row>
        <Col
          style={{ pading: "0", borderRight: ".1px solid #f7f4f4" }}
          sm={3}
          lg={3}
        >
          <Side />
        </Col>
        <Col style={{ borderRight: ".1px solid #f7f4f4" }} sm={5} lg={5}>
          <Tweet />
        </Col>
        <Col style={{paddingTop:"3.5rem" }} sm={4} lg={4}>
          <Container style={{width:"80%"}}>
            <SearchBtn name={name} />

            <Row style={{paddingTop:"1rem"}}>
              <Whatshappening />
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
}
