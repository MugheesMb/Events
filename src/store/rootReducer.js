import { combineReducers } from "redux";
import eventReducer from "../events/eventReducer";


const rootReducer = combineReducers({

    event: eventReducer
})

export default rootReducer;