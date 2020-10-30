import React, { Component, useState, useEffect } from "react";
import { HorizontalBar } from "react-chartjs-2";
import chartObj from "../Chart/chartData.json";
const Chart = ({ category }) => {
  const chartDesc = chartObj.filter((chartType) => {

    return chartType.category === category;
  });
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData(chartDesc[0].description);
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <>
      <HorizontalBar data={chartData} />
    </>
  );
};

export default Chart;
