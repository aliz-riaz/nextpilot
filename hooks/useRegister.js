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
