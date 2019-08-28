import {
    SUBMIT_FIRST_STEP,
    SUBMIT_SECOND_STEP,
    CLEAR_STEPS
} from '../actions/actions-types/steps-actions';

const initialState = {
    cardNumber: '',
    country: '',
    postalCode: '',
    zip: ''
};

const stepsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_FIRST_STEP: {
            const { cardNumber, country } = action.data;
            return {
                ...state,
                cardNumber,
                country
            }
        }

        case SUBMIT_SECOND_STEP: {
            const { code } = action;
            if ( state.country === 'Ukraine' ) {
                return {
                    ...state,
                    postalCode: code
                }
            } else {
                return {
                    ...state,
                    zip: code
                }
            }
        }

        case CLEAR_STEPS: {
            return {
                ...initialState
            }
        }

        default:
            return state;
    }
};

export default stepsReducer;