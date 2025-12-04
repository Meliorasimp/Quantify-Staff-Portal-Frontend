import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ZoneUtilizationChart = () => {
  const data = {
    labels: ["Zone A", "Zone B", "Zone C", "Zone D"],
    datasets: [
      {
        label: "Storage Utilization (%)",
        data: [75, 50, 90, 60],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Zone Utilization",
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100, // optional for % scale
        title: {
          display: true,
          text: "Percentage",
        },
      },
      y: {
        title: {
          display: true,
          text: "Warehouse Zones",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ZoneUtilizationChart;
