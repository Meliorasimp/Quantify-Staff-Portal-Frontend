import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { type ChartOptions } from "chart.js";

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RevenueOvertimeChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue Over Time ($)",
        data: [5000, 7000, 8000, 6000, 9000, 11000],
        borderColor: "green",
      },
    ],
  };
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Revenue Over Time",
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  };
  return <Line data={data} options={options} />;
};
export default RevenueOvertimeChart;
