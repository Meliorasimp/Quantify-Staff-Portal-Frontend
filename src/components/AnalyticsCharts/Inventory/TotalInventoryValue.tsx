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

const TotalInventoryValueChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Inventory Value by Cost",
        data: [5000, 7000, 8000, 6000, 9000, 11000, 12000, 13000],
        borderColor: "green",
      },
      {
        label: "Inventory Value by Retail Price",
        data: [8000, 9000, 10000, 9500, 12000, 13000, 14000, 55000],
        borderColor: "blue",
      },
    ],
  };
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Total Inventory Value Over the Year",
      },
      legend: {
        position: "top",
      },
    },
  };
  return <Line data={data} options={options} />;
};
export default TotalInventoryValueChart;
