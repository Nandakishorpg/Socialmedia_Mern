import React from "react";
import './right.css'
import styled from 'styled-components'
export default function Whatshappening() {
    const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const myInput=styled.input`
color:"blue
`
  return (
    <>
      <div className="whatshappening-container"
        style={{ backgroundColor: "white", height: "100px", width: "100%" }}
      >
        <div
          style={{ width: "80%", height: "100%",backgroundColor:"#f7f4f4",borderRadius:"25px" }}
          >

      <Title>

        hello
      </Title>

      <myInput>
        hihihihi
      </myInput>
    





          
        </div>
      </div>
    </>
  );
}
