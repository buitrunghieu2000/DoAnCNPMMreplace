import React, { useRef, useState } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { payloadGetStatisticOrder } from "../../apis/statistic/getStatisticOrder.api";
import _ from "lodash";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { getAllChartAsync } from "../../features/chart/slice/thunk";
import { selectAllChart } from "../../features/chart/slice/selector";
import { formatDate } from "../../utils/datFormater";

const ChartMoney = (props: { type: string }) => {
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
  // console.log(statistic);
  const totalMoney = _.map(statistic, "totalMoney");
  // console.log("abc", timeStart);
  // console.log("xyz", timeEnd);
  // console.log("123", totalMoney);

  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Total Money 7 Days",
    },

    yAxis: {
      title: {
        text: "Money",
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
    //     pointStart: 2010,
    //   },
    // },

    series: [
      {
        name: "Money",
        data: [
          totalMoney[0],
          totalMoney[1],
          totalMoney[2],
          totalMoney[3],
          totalMoney[4],
          totalMoney[5],
          totalMoney[6],
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

  return (
    <div className="d-flex flex-column" style={{ flex: "1" }}>
      <div>
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

export default ChartMoney;
