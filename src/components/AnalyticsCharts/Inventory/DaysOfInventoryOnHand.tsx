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

const DaysOfInventoryOnHandChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Days of Inventory on Hand",
        data: [30, 28, 32, 27, 25, 22],
        borderColor: "purple",
      },
    ],
  };
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Days of Inventory on Hand Over the Year",
      },
      legend: {
        position: "top",
      },
    },
  };
  return <Line data={data} options={options} />;
};
export default DaysOfInventoryOnHandChart;
