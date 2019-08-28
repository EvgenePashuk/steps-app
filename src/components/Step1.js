import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { submitFirstStep } from './actions/stepsActions';
import Select from 'react-select';
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
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
`;

//TODO fix select styles
const StyledSelect = styled(Select)`
  &&& {
    height: 44px;
    width: 100%;  
    background: #FAFBFF;
    box-shadow: 0px 6px 30px #EBEDF0;
    border-radius: 100px;
  }
`;

const SubmitButton = styled.input`
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

const options = [
    { value: 'United States', label: 'United States' },
    { value: 'Ukraine', label: 'Ukraine' },
];

const Step1 = ({ submitFirstStep, history }) => {

    const [cardNumber, setCardNumber] = useState('');
    const [country, setCountry] = useState('');

    const handleCardChange = event => setCardNumber(event.target.value);
    const handleCountryChange = selectedOption => setCountry(selectedOption);
    const handleSubmit = () => {
        submitFirstStep({
            cardNumber,
            country: country.value
        });
        history.push('/step2')
    };

    return (
        <>
            <LinkContainer>
                <HelpLink to="/help">Help</HelpLink>
            </LinkContainer>
            <Title>Step 1</Title>
            <form onSubmit={handleSubmit}>
                <StyledLabel>
                    <FieldTitle>Card Number</FieldTitle>
                    <StyledInput
                        type="number"
                        value={cardNumber}
                        onChange={handleCardChange}
                        pattern="[0-9]{16}"
                        required
                    />
                </StyledLabel>
                <StyledLabel>
                    <FieldTitle>Select country</FieldTitle>
                    <StyledSelect
                        value={country}
                        onChange={handleCountryChange}
                        options={options}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                        required
                    />
                </StyledLabel>
                <SubmitButton type="submit" value="Next Step" />
            </form>
        </>
    )
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        submitFirstStep: ( data ) => { dispatch(submitFirstStep(data)) }
    }
};

const wrappedComponent = withRouter(Step1);

export default connect(null, mapDispatchToProps)(wrappedComponent);