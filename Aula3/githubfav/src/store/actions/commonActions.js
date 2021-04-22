/* ACTION TYPES */
export const COLLAPSED = "COLLAPSED";

/* ACTION CREATORS */
export function collapsedMenu(collapsed) {
  return { type: COLLAPSED, collapsed };
}
