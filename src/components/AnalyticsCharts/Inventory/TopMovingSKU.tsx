import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

interface ParetoProps {
  labels: string[];
  values: number[];
}

const TopMovingSKUChart: React.FC<ParetoProps> = ({ labels, values }) => {
  // 1. Sort items by descending value
  const sorted = labels
    .map((label, index) => ({ label, value: values[index] ?? 0 }))
    .sort((a, b) => b.value - a.value);

  const sortedLabels = sorted.map((x) => x.label);
  const sortedValues = sorted.map((x) => x.value);

  // 2. Compute cumulative percentages
  const total = sortedValues.reduce((sum, x) => sum + x, 0);
  const cumulative = (() => {
    if (total === 0) return sortedValues.map(() => 0);
    let acc = 0;
    return sortedValues.map((value) => {
      acc += value;
      return parseFloat(((acc / total) * 100).toFixed(2));
    });
  })();

  // 3. Prepare data for Chart.js
  const data: ChartData<"bar" | "line", number[], string> = {
    labels: sortedLabels,
    datasets: [
      {
        type: "bar",
        label: "Frequency",
        data: sortedValues,
        yAxisID: "yBar",
      },
      {
        type: "line",
        label: "Cumulative %",
        data: cumulative,
        yAxisID: "yLine",
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 3,
        fill: false,
      },
    ],
  };

  // 4. Chart options
  const options: ChartOptions<"bar" | "line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yBar: {
        type: "linear",
        position: "left",
        title: { display: true, text: "Quantity" },
      },
      yLine: {
        type: "linear",
        position: "right",
        min: 0,
        max: 100,
        grid: { drawOnChartArea: false }, // avoids grid overlap
        title: { display: true, text: "Cumulative %" },
      },
    },
    plugins: {
      legend: { position: "top" },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default TopMovingSKUChart;
