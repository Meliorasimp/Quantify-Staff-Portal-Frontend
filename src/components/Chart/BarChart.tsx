import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Stock In",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "rgba(0, 205, 0, 0.5)",
    },
    {
      label: "Stock Out",
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: "rgba(255, 0, 0, 0.5)",
    },
    {
      label: "Transfers Completed",
      data: [18, 48, 77, 9, 100, 27, 40],
      backgroundColor: "rgba(0, 0, 255, 0.5)",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Bar Chart Example",
    },
  },
};

export default function BarChart() {
  return <Bar data={data} options={options} />;
}
