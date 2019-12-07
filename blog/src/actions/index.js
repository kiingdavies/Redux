import jsonPlaceholader from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholader.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
