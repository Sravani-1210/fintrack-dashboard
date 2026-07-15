import "./Analytics.css";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function Analytics({
  income,
  expense,
}) {

  const savings = income - expense;

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income || 1, expense || 0],
        backgroundColor: [
          "#22C55E",
          "#EF4444",
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="analytics-card">

    <div className="analytics-header">
  <h2>Financial Analytics</h2>
  <p>Income vs Expense Overview</p>
</div>

      <div className="chart-wrapper">

        <Doughnut
          data={data}
          options={{
            cutout: "70%",
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />

      </div>

      <div className="analytics-info">

        <div className="analytics-row">
          <span>Income</span>
          <strong className="green">
            ₹{income.toLocaleString("en-IN")}
          </strong>
        </div>

        <div className="analytics-row">
          <span>Expense</span>
          <strong className="red">
            ₹{expense.toLocaleString("en-IN")}
          </strong>
        </div>

        <div className="analytics-row">
          <span>Savings</span>
          <strong>
            ₹{savings.toLocaleString("en-IN")}
          </strong>
        </div>

      </div>

    </div>
  );
}

export default Analytics;