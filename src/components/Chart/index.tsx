import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const Chart = (props: { type: string; select: number }) => {
  const options1 = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Total Order",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
    ],
  };
  const options2 = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Total Money",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
    ],
  };
  let choose;
  if (props.select === 1) {
    choose = options1;
  } else {
    choose = options2;
  }
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={choose} />
    </div>
  );
};

export default Chart;
