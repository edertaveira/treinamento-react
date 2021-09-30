import { favoritarAction, removerFavoritoAction } from "../store/actions/commonActions";

function favoritar(repository, dispatch) {
  dispatch(favoritarAction(repository));
}

function removerFavorito(repository, dispatch) {
  dispatch(removerFavoritoAction(repository));
}

export { favoritar, removerFavorito };
