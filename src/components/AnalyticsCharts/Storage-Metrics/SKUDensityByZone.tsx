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

const SKUDensityByZone = () => {
  const data = {
    labels: [
      "SKU-001",
      "SKU-002",
      "SKU-003",
      "SKU-004",
      "SKU-005",
      "SKU-006",
      "SKU-007",
      "SKU-008",
      "SKU-009",
      "SKU-010",
    ],
    datasets: [
      {
        label: "SKU Density",
        data: [120, 80, 150, 100, 90, 110, 130, 70, 60, 140],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 2,
      },
    ],
  };
  const options = {
    indexAxis: "x" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: "SKU Density By Storage Zone",
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
        title: {
          display: true,
          text: "Number of SKUs",
        },
      },
      y: {
        title: {
          display: true,
          text: "Storage Zones",
        },
      },
    },
  };
  return <Bar data={data} options={options} />;
};
export default SKUDensityByZone;
