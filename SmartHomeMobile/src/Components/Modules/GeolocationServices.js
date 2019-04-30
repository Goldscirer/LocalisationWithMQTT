import constants from "./actionConstants";

const {
    GET_CURRENT_LOCATION,
    GET_INPUT,
    TOGGLE_SEARCH_RESULT,
    GET_ADDRESS_PREDICTIONS,
    GET_SELECTED_ADDRESS,
    GET_DISTANCE_MATRIX,
    GET_FARE,
    BOOK_CAR,
    GET_NEARBY_DRIVERS
} = constants;

export function getInputData(payload){
    return {
        type: GET_INPUT,
        payload
    }
}