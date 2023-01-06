import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  display-inline: flex;
  aliginitems: center;
  justifycontent: center;
  padding: 8px 16px;
  margin: 10px;
`;

const PrimaryButton = () => {
  return <Button color="#e4e4e4">Hello World</Button>;
};

export default PrimaryButton;
