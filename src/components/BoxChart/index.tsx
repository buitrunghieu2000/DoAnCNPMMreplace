import React from "react";
import ChartMoney from "../ChartMoney";
import ChartOrder from "../ChartOrder";
import Chart from "../ChartOrder";

export const BoxChart = (props: { select: number }) => {
  return (
    <div className="bg-white border-transparent rounded-lg shadow-xl p-5">
      {props.select === 1 ? (
        <ChartOrder type="spline" />
      ) : props.select === 2 ? (
        <ChartMoney type="spline" />
      ) : (
        <></>
      )}
    </div>
  );
};
