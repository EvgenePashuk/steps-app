import {
    SUBMIT_FIRST_STEP,
    SUBMIT_SECOND_STEP,
    CLEAR_STEPS
} from './actions-types/steps-actions';

export const submitFirstStep = ( cardNumber, country ) => {
    return {
        type: SUBMIT_FIRST_STEP,
        cardNumber,
        country
    }
};

export const submitSecondStep = ( code ) => {
    return {
        type: SUBMIT_SECOND_STEP,
        code
    }
};

export const clearSteps = () => {
    return {
        type: CLEAR_STEPS
    }
};