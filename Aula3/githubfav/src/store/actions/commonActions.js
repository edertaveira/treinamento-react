/* ACTION TYPES */
export const COLLAPSED = "COLLAPSED";
export const FAVORITAR = "FAVORITAR";
export const REMOVER_FAVORITO = "REMOVER_FAVORITO";

/* ACTION CREATORS */
export function collapsedMenu(collapsed) {
  return { type: COLLAPSED, collapsed };
}

export function favoritarAction(repository) {
  return { type: FAVORITAR, repository };
}

export function removerFavoritoAction(repository) {
  return { type: REMOVER_FAVORITO, repository};
}
