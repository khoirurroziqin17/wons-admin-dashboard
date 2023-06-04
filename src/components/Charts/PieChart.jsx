import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({
  labels,
  tooltipLabel,
  colors,
  borderColors,
}) {
  const data = {
    labels,
    datasets: [
      {
        label: tooltipLabel,
        data: labels.map(() => faker.number.int({ min: 0, max: 50 })),
        backgroundColor: colors,
        borderColor: borderColors,
        borderWidth: 2,
      },
    ],
  };

  return <Pie data={data} />;
}
