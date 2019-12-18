export default function sideBarOpen(state = false, action) {
  switch (action.type) {
    case 'CARREGOU_SIDEBAR':
    return !state;
    
    
    default:
      return state;
  }
}
