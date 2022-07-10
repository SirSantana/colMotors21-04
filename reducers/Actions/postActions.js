import * as api from "../Api/index";
import {
  CREATE_COMMENT,
  CREATE_POST,
  // CREATE_POST,
  // DELETE_POST,
  // CREATE_POST,
  // DELETE_POST,
  END_LOADING,
  FETCH_BY_SEARCH,
  //   FAVORITE_POST,
  GET_ALL,
  GET_ONE_POST,
  START_LOADING,
} from "../type";

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getOnePost(id);
    dispatch({ type: GET_ONE_POST, payload: { post: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log({ message: error.message });
  }
};
export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getAllPosts();
    dispatch({ type: GET_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, router) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createPost(post);
    await router.push(`/posts/${data.newPost._id}`)
    
    dispatch({ type: CREATE_POST, payload: data.newPost });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error.message);
  }
};
;
// export const favoritePost = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.favoritePost(id);
//     dispatch({ type: FAVORITE_POST, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await api.deletePost(id);
//     dispatch({ type: DELETE_POST, payload: id });
//   } catch (error) {
//     console.log(error);
//   }
// };
