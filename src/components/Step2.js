import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { submitSecondStep } from './actions/stepsActions';
import { withRouter } from 'react-router-dom';

const LinkContainer = styled.div`
  align-self: flex-end;
  margin-bottom: 40px;
  cursor: pointer;
`;

const Title = styled.div`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    color: #000000;
    
    margin-bottom: 40px;
`;

const HelpLink = styled(Link)`
  margin-right: 24px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

const FieldTitle = styled.p`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
`;

const StyledInput = styled.input`
  height: 44px;
  width: 100%;  
  background: #FAFBFF;
  box-shadow: 0px 6px 30px #EBEDF0;
  border-radius: 100px;
  border: none;
`;

const SubmitButton = styled.button`
    width: 160px;
    height: 58px; 
    background: #007AFF;
    box-shadow: 0px 3.34486px 30px #E6ECF1;
    border-radius: 100px; 
    
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #F1F6FA;
    cursor: pointer;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 40px;
`;

const Step2 = ({ country, submitSecondStep, history }) => {

    const [code, setCode] = useState('');

    const handleCardChange = event => setCode(event.target.value);
    const handleSubmit = event => {
        submitSecondStep(code);
        history.push('/success')
    };

    return (
        <>
            <LinkContainer>
                <HelpLink to="/help">Help</HelpLink>
            </LinkContainer>
            <Title>Step 2</Title>
            <form onSubmit={handleSubmit}>
                <StyledLabel>
                    <FieldTitle>{country === 'Ukraine' ? 'Postal Code' : 'Zip'}</FieldTitle>
                    <StyledInput value={code} onChange={handleCardChange} />
                </StyledLabel>
                <SubmitButton type="submit" onClick={handleSubmit}>Submit</SubmitButton>
            </form>
        </>
    )
};

const mapStateToProps = ( state ) => {
    return {
        country: state.country
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        submitSecondStep: ( data ) => { dispatch(submitSecondStep(data)) }
    }
};

const wrapperComponent = withRouter(Step2);

export default connect(mapStateToProps, mapDispatchToProps)(wrapperComponent);