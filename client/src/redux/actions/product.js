import axios from "axios";
import { server } from "../../server";

// Create Product
export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "productCreateRequest",
    });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `${server}/product/create-product`,
      newForm
    );

    dispatch({
      type: "productCreateSuccess",
      payload: data?.product,
    });
  } catch (error) {
    dispatch({
      type: "productCreateFailure",
      payload: error.response?.data?.message,
    });
  }
};

// load Seller
// export const loadSeller = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "LoadSellerRequest",
//     });
//     const { data } = await axios.get(`${server}/shop/getseller`);
//     dispatch({
//       type: "LoadSellerSuccess",
//       payload: data.seller,
//     });
//   } catch (error) {
//     dispatch({
//       type: "LoadSellerFailure",
//       payload: error.response?.data?.message,
//     });
//   }
// };
