import React, { useRef, useState } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import {
  getGetStatisticOrderApi,
  payloadGetStatisticOrder,
} from "../../apis/statistic/getStatisticOrder.api";
import _ from "lodash";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../utils/datFormater";
import { getAllChartAsync } from "../../features/chart/slice/thunk";
import { selectAllChart } from "../../features/chart/slice/selector";

const ChartOrder = (props: { type: string }) => {
  const dispatch = useDispatch();
  const timeEnd = formatDate(dayjs().toDate());
  const timeStart = formatDate(dayjs().subtract(6, "d").toDate());

  const payload: payloadGetStatisticOrder = {
    timeStart: timeStart,
    timeEnd: timeEnd,
  };

  React.useEffect(() => {
    dispatch(getAllChartAsync(payload));
  }, []);
  const statistic = useSelector(selectAllChart);

  const totalOrder = _.map(statistic, "totalOrder");

  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Total Order 7 Days",
    },

    yAxis: {
      title: {
        text: "Total Order",
      },
    },

    xAxis: {
      // accessibility: {
      //   rangeDescription: "Range: 2010 to 2017",
      // },

      categories: [
        "2021-12-03",
        "2021-12-04",
        "2021-12-05",
        "2021-12-06",
        "2021-12-07",
        "2021-12-08",
        "2021-12-09",
      ],
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    // plotOptions: {
    //   series: {
    //     label: {
    //       connectorAllowed: false,
    //     },
    //     pointStart: 2021,
    //   },
    // },

    series: [
      {
        name: "Order",
        data: [
          totalOrder[0],
          totalOrder[1],
          totalOrder[2],
          totalOrder[3],
          totalOrder[4],
          totalOrder[5],
          totalOrder[6],
          totalOrder[7],
        ],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  const handleOnchange2 = (e: any) => {
    const result = e.target.value;
    const newStartTime = formatDate(dayjs(result).subtract(6, "d").toDate());
    dispatch(getAllChartAsync({ timeStart: newStartTime, timeEnd: result }));
  };

  // console.log("123", timeStart);
  // console.log("456", timeEnd);
  return (
    <div style={{ flex: "1" }}>
      <div>
        <span> </span>
        <span>Time End: </span>
        <input
          type="date"
          id="end"
          name="trip-end"
          defaultValue={timeEnd}
          max={timeEnd}
          onChange={handleOnchange2}
        />
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChartOrder;
