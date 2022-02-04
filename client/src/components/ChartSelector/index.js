import React, { useState, useEffect } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import chartObj from "../ChartSelector/chartData.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartSelector = ({ category, chartType }) => {
  const chartsTypeList = {
    horizontalBar: Bar,
    doughnut: Doughnut
  }
  const CurrentChart = chartsTypeList[chartType]
  const chartDesc = chartObj.filter(({chartCategory}) => {
    return chartCategory === category;
  });
  const [chartData, setChartData] = useState();
  const chart = () => {
    setChartData(chartDesc[0].description);
  };

  useEffect(() => {
    // chart();
        setChartData(chartDesc[0].description);
  }, [chartData]);

  return (
    <>
      {chartData ? <CurrentChart data={chartData} /> : "Loading..." }
    </>
  );
};

export default ChartSelector;


{/* <CurrentChart data={chartData} /> */}