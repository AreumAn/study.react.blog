import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// type of action
const SET_INPUT = 'input/SET_INPUT';

// create action
export const setInput = createAction(SET_INPUT);

// initialize
const initialState = Map({
    value: ''
});

// define reduxer
export default handleActions({
    [SET_INPUT]: (state, action) => {
        return state.set('value', action.payload)
    }
}, initialState);