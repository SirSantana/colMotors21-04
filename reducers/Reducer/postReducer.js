import { CREATE_POST, DELETE_POST, END_LOADING, GET_ALL, START_LOADING } from "../type";


export default (state={ isLoading: true, posts:[],}, action) => {
    switch (action.type) {
      case START_LOADING:
        return { ...state, isLoading: true };
      case END_LOADING:
        return { ...state, isLoading: false };
      case GET_ALL:
        return {...state, posts: action.payload};
    //   case GET_ONE_POST:
    //     return {...state, post: action.payload.post}
    //   case GET_BY_SEARCH:
    //     return {...state, posts: action.payload.data}
      case CREATE_POST:
        return {...state, posts: [...state.posts, action.payload]}
    //     case FAVORITE_POST:
    //         return {...state, posts:  state.posts.map(post=> post._id === action.payload._id ? action.payload: post)}
        // case DELETE_POST:
        // return   {...state, posts: state.posts.filter((post) => post._id !== action.payload)}
      default:
        return state;
    }
}