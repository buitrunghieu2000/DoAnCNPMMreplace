import { RootState } from "../../../stores/store";

export const selectDetailOrder = (state: RootState) => state?.order?.order;
