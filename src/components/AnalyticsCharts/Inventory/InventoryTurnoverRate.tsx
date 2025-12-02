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

const InventoryTurnoverRateChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Inventory Turnover Rate",
        data: [4.5, 5.0, 4.8, 5.2, 5.5, 6.0],
        borderColor: "orange",
      },
    ],
  };
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Inventory Turnover Rate Over the Year",
      },
      legend: {
        position: "top",
      },
    },
  };
  return <Line data={data} options={options} />;
};
export default InventoryTurnoverRateChart;
