// import { instance } from "@/axios/instance"; // Import the Axios instance

// async function useRegisterList() {
//   let response;
//   // GET request with headers
//   await instance
//     .get("/posts")
//     .then((res) => {
//       // Handle the successful response here
//       console.log("GET response:", res.data);
//       response = res.data;
//     })
//     .catch((error) => {
//       // Handle any errors here
//       console.error("GET error:", error);
//       response = error;
//     });
//   return response;
// }

import { useReducer, useCallback } from "react";
import { instance } from "@/axios/instance";

export default function useRegisterList() {
  const [state, setState] = useReducer((_, action) => action, {
    isIdle: true,
  });

  const mutate = useCallback(
    async (payload, { onSuccess = () => {}, onError = () => {} } = {}) => {
      setState({ isLoading: true });
      try {
        const res = await instance.post(`/posts`, payload);
        const data = await res.data;
        setState({ isSuccess: true });
        if (onSuccess) onSuccess(data);
      } catch (error) {
        setState({ isError: true, error: error?.response?.data });
        if (onError) onError(error?.response?.data);
      }
    },
    []
  );

  return { mutate, ...state };
}
// export default useRegisterList;
