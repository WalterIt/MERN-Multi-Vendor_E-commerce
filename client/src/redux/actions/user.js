import axios from "axios";

// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/getuser`);
    dispatch({
      type: "LoadUserSuccess",
      payload: data?.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data?.message,
    });
  }
};