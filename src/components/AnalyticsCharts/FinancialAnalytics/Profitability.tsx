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

const ProfitabilityChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        //Gross Profit = Revenue - Cost of Goods Sold
        label: "Gross Profit Over Time ($)",
        data: [1500, 2500, 3000, 2000, 3500, 5000],
        borderColor: "purple",
      },
      {
        //Net Profit = Gross Profit - Expenses
        label: "Net Profit Over Time ($)",
        data: [3500, 4500, 5000, 4000, 5500, 6000],
        borderColor: "red",
      },
    ],
  };
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Profitability Over Time",
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  };
  return <Line data={data} options={options} />;
};
export default ProfitabilityChart;
