import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

export default function LineChart({
  labels,
  dataLabel,
  filledArea,
  borderColor,
  backgroundColor,
}) {
  const options = {
    responsive: true,
    plugins: {},
  };
  const data = {
    labels,
    datasets: [
      {
        fill: filledArea,
        label: dataLabel,
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        borderColor,
        backgroundColor,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
