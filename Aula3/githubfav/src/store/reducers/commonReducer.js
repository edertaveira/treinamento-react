import { COLLAPSED, FAVORITAR, REMOVER_FAVORITO } from "../actions/commonActions";

const initialState = { collapsed: false, favoritos: [] };

function commonRoot(state = initialState, action) {
  switch (action.type) {
    case COLLAPSED:
      return { ...state, collapsed: action.collapsed };
    case FAVORITAR:
      if (!state.favoritos) state.favoritos = [];
      const newFavoritos = [...state.favoritos, action.repository];
      return { ...state, favoritos: newFavoritos };
    case REMOVER_FAVORITO:
      const favoritosList = [...state.favoritos];
      const index = favoritosList.findIndex((item) => item.id === action.repository);
      favoritosList.splice(index, 1);
      return { ...state, favoritos: favoritosList };
    default:
      return state;
  }
}

export default commonRoot;
