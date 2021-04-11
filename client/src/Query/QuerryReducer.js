import { ASK_QUERY,ANS_QUERY,ASK_BY_PEERS,ASK_BY_ME,ANS_BY_ME,LIKE_QUE,DISLIIKE_QUE} from "../Constants/actionTypes";

export default (state, action) => {
  switch (action.type) {
  case ASK_BY_PEERS:
      console.log(action.payload);
      return{
          ...state,
          ...action.payload,
          querry:action.payload.data.queries,
          user:action.payload.data.peer
      }
      case ASK_BY_ME:
      console.log(action.payload.data);
      return{
          ...state,
          ...action.payload,
          querry:action.payload.data.queries,
          solution:action.payload.data.s,
          user:action.payload.data.peer
      }
      case ANS_BY_ME:
        console.log(action.payload.data);
        return{
            ...state,
            ...action.payload,
            querry:action.payload.data.qs,
            solution:action.payload.data.sol,
            user:action.payload.data.peer
        }
    default:
      return {
        ...state,
      };
  }
};