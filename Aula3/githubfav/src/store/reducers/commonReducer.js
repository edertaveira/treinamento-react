import { COLLAPSED, BOXES, CONTRATOS } from "../actions/commonActions";

const initialState = { collapsed: false };

function commonRoot(state = initialState, action) {
  switch (action.type) {
    case COLLAPSED:
      return { ...state, collapsed: action.collapsed };
    default:
      return state;
  }
}

export default commonRoot;
