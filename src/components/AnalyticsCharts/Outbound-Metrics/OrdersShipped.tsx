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

const AccuracyOvertimeChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Accuracy Over Time (%)",
        data: [97, 95, 95, 95, 96, 97],
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
        text: "Outbound Shipment Accuracy Over Time",
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  };
  return <Line data={data} options={options} />;
};
export default AccuracyOvertimeChart;
