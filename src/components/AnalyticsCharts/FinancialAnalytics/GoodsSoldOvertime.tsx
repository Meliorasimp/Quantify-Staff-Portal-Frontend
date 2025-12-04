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

const GoodsSoldOvertimeChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Goods Sold Over Time",
        data: [2000, 1000, 500, 2900, 1000, 5000],
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
export default GoodsSoldOvertimeChart;
