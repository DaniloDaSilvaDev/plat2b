export default function checked(state = false, action) {
  switch (action.type) {
    case 'CHECKED':
      console.log("OPA");
      return !state;

    default:
      return state;
  }  
}
