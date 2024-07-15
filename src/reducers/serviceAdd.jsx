import { CHANGE_SERVICE_FIELD, EDIT_SERVICE } from "../actions/actionTypes";
const initialState = { name: "", price: "" };
export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      return { ...state, [action.payload.name]: action.payload.value };
    case EDIT_SERVICE:
      return { name: action.payload.name, price: Number(action.payload.price) };
    default:
      return state;
  }
}
