interface ButtonProps {
  label :string
  color : "primary" | "secondary"
}

import React from "react";
import styled from "@emotion/styled";

const BaseButton = styled.button`
  display-inline: flex;
  aliginitems: center;
  justifycontent: center;
  padding: 8px 16px;
  margin: 10px;
`;

export const Button = (props : ButtonProps) => {
  return <BaseButton color={props.color}>{props.label}</BaseButton>;
};

