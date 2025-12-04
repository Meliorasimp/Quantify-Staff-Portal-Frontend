import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";

// Register Chart.js modules
ChartJS.register(ArcElement, Title, Tooltip, Legend);

const WarehouseCapacityUsageChart = () => {
  const data = {
    labels: ["Free Space", "Used Space"],
    datasets: [
      {
        label: "Capacity Usage (%)",
        data: [25000, 10000],
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Warehouse Capacity Usage",
      },
    },
  };
  return <Pie data={data} options={options} />;
};
export default WarehouseCapacityUsageChart;
