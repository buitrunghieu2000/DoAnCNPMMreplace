import { RootState } from "../../../stores/store";

export const selectAllProduct = (state: RootState) => state?.product?.product;
