import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  align-text: center;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 34px;

  color: #000000;
`;

const SuccessStep = () => (
    <Message>Payment successful</Message>
);

export default SuccessStep;