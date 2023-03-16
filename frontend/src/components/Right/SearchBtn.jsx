import { Button, Input, TextField } from "@mui/material";
import { React, useState } from "react";

import { styled } from "@mui/material";

export default function SearchBtn() {
  const StyledInput = styled(Input)({
    background: "#f7f4f4",
    borderRadius: "20px",
    width:"100%",

    padding: "10px 20px",
    "&:hover": {
      border: "none",
      outline: "none",
    },
    "::placeholder": {
      color: "rgba(255, 255, 255, 0.7)",
    },
  });

  return (
    <>
      <div>
        <StyledInput placeholder="Search Twitter" />
      </div>
    </>
  );
}
