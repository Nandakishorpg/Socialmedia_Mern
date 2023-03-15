import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
} from "react-bootstrap";
import "./side.css";
import { Add, Home } from "@mui/icons-material";

export default function Side() {
  return (
    <>
      {/* border:"1px solid red" */}
      <div >
        <Row
          style={{
           
            
            width: "100%"
          }}
        >
          <Row>
            <Col lg={2}>
           

            </Col>
            <Col style={{alignItems:"center"}} lg={5}>
            <div style={{ paddingTop: "1rem" }}>
              <Image
                style={{ width: "50px", height: "45px" }}
                src="/assets/twitter.png"
                roundedCircle
                fluid
              />
            </div>
            </Col>
           
          </Row>

          <Row style={{ width: "100%" ,paddingTop:"1rem"}}>
            <Col lg={3}></Col>
            
            <Col
              className="side-navs"
              
            
            >
              <Nav className="flex-column text-center gap-5 nav-flex">
                <NavItem className="NavItems">
                  {" "}
                  <div className="nav-links">
                    <Home style={{fontSize:'inherit'}}  /> <span style={{ color: "black" }}>Home</span>{" "}
                  </div>{" "}
                </NavItem>
                <NavItem className="NavItems">
                  {" "}
                  <div className="nav-links">
                    <Home style={{fontSize:'inherit'}}  />
                     <span style={{ color: "black" }}>Exolore</span>{" "}
                  </div>{" "}
                </NavItem>
                <NavItem className="NavItems">
                  {" "}
                  <div className="nav-links" >
                    <Home style={{fontSize:'inherit'}}  />{" "}
                    <span style={{ color: "black" }}>Notification</span>{" "}
                  </div>{" "}
                
                </NavItem>
                <NavItem className="NavItems">
                  {" "}
                  <div className="nav-links">
                    <Home style={{fontSize:'inherit'}}  /> <span style={{ color: "black" }}>Message</span>{" "}
                  </div>{" "}
                </NavItem>
                <NavItem className="NavItems">
                  {" "}
                  <div className="nav-links">
                    <Home style={{fontSize:'inherit'}}  /> <span style={{ color: "black" }}>Bookmark</span>{" "}
                  </div>{" "}
                </NavItem>
                <NavItem className="NavItems">
                  {" "}
                  <div className="nav-links">
                    <Home style={{fontSize:'inherit'}}  /> <span style={{ color: "black" }}>Lists</span>{" "}
                  </div>{" "}
                </NavItem>
                <NavItem className="NavItems">
                  {" "}
                  <div className="nav-links">
                    <Home style={{fontSize:'inherit'}}  /> <span style={{ color: "black" }}>profile</span>{" "}
                  </div>{" "}
                </NavItem>
                <NavItem className="NavItems">
                  {" "}
                  <div className="nav-links">
                    <Home style={{fontSize:'inherit'}}  /> <span style={{ color: "black" }}>More</span>{" "}
                  </div>{" "}
                </NavItem>

                <NavItem></NavItem>
                <NavItem></NavItem>
                <NavItem></NavItem>
                <NavItem></NavItem>
                <NavItem></NavItem>
                <NavItem></NavItem>
                <NavItem></NavItem>
              </Nav>
            </Col>
          </Row>
        </Row>
      </div>
    </>
  );
}
