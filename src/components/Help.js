import React from 'react';
import styled from "styled-components";

const Message = styled.div`
  align-text: center;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 34px;
  color: #000000;
`;

const Help = () => (
    <Message>HELP?</Message>
);

export default Help;