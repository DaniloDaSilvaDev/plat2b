export default function sideBar(state = false, action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return !state;

    default:
      return state;
  }
}
