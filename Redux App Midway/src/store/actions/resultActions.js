import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";

export const saveResult = (val) => {
    return {
        type: STORE_RESULT,
        value: val
    }
}
export const store_result = (val) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(saveResult(val));
        }, 2000);
    }
};
export const delete_result = (resultID) => {
    return {
        type: DELETE_RESULT,
        resultID: resultID
    }
};