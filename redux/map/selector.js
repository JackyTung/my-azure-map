import { API_STATUS } from "@/constants/api";

export const isLoadingSelector = (state) =>
  state.map.status === API_STATUS.LOADING;
