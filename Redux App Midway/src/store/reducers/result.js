import * as actionTypes from "../actions/actionTypes"

const initialState = {
    result: []
}

const result = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
        return {
            ...state,
            result: state.result.concat({id: new Date(), value:action.value})
        }

        case actionTypes.DELETE_RESULT:
            const updatedArray = state.result.filter((result) => {
                return result.id !== action.resultID
            });
        return {
            ...state,
            result: updatedArray
        }
    }
    return state;
};

export default result;