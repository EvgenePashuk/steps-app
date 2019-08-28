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
            return {
                ...state,
                cardNumber: action.cardNumber,
                country: action.country
            }
        }

        case SUBMIT_SECOND_STEP: {
            if ( state.country === 'Ukraine' ) {
                return {
                    ...state,
                    postalCode: action.code
                }
            } else {
                return {
                    ...state,
                    zip: action.code
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