/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux'
function MyReducer(
    state = {
        left: false,
        right: false,
        },
    action){
        switch (action.type){
            case 'left':
                return {
                    ...state,
                    left: !state.left,
                }
            case 'right':
                return {
                    ...state,
                    right: !state.right
                }
            default:
                return state
        }
}
function View(state={},action){
    switch(action.type){
        case 'onPressIn':
            return state
        case 'onPressOut':
            return state
        default:
            return state
    }
}
// const reducers = combineReducers({
//     MyReducer,
//     View
// })
export default MyReducer