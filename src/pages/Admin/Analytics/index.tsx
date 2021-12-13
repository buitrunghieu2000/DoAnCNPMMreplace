import dayjs from "dayjs";
import _ from "lodash";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { payloadGetStatisticOrder } from "../../../apis/statistic/getStatisticOrder.api";
import ChartStats from "../../../components/ChartOrder";
import { selectAllChart } from "../../../features/chart/slice/selector";
import { getAllChartAsync } from "../../../features/chart/slice/thunk";
import { formatDate } from "../../../utils/datFormater";

interface AnalyticsProps {}

const Analytics = (props: AnalyticsProps) => {
  const dispatch = useDispatch();
  const timeEnd = formatDate(dayjs().toDate());
  const timeStart = formatDate(dayjs().subtract(6, "d").toDate());
  const Arr = (day: string) =>
    [...Array(7)]
      .map((item: any, i: number) =>
        formatDate(dayjs(day).subtract(i, "d").toDate())
      )
      .reverse();
  const [statsDay, setStatsDay] = useState<any>(
    Arr(formatDate(dayjs().toDate()))
  );

  const payload: payloadGetStatisticOrder = {
    timeStart: timeStart,
    timeEnd: timeEnd,
  };

  React.useEffect(() => {
    dispatch(getAllChartAsync(payload));
  }, []);
  const statistic = useSelector(selectAllChart);

  const totalOrder = _.map(statistic, "totalOrder");
  const totalMoney = _.map(statistic, "totalMoney");

  const handleOnchangeDay = (e: any) => {
    const result = e.target.value;
    const newStartTime = formatDate(dayjs(result).subtract(6, "d").toDate());
    dispatch(getAllChartAsync({ timeStart: newStartTime, timeEnd: result }));
    setStatsDay(Arr(result));
  };

  return (
    <div className="container">
      <div>
        <div>
          <span> </span>
          <span>Time End: </span>
          <input
            type="date"
            id="end"
            name="trip-end"
            defaultValue={timeEnd}
            max={timeEnd}
            onChange={handleOnchangeDay}
          />
        </div>

        <ChartStats
          data={totalOrder}
          statsDate={statsDay}
          headerText="Total Order 7 Days"
          yText="Total Order"
          seriesText="Order"
          className="mb-5"
        />

        <ChartStats
          data={totalMoney}
          statsDate={statsDay}
          headerText="Total Money 7 Days"
          yText="Total Money"
          seriesText="Money"
        />
      </div>
    </div>
  );
};

export default Analytics;
