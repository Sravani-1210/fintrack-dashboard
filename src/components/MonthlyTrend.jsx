import "./MonthlyTrend.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function MonthlyTrend({ transactions }) {

  const monthlyIncome = new Array(12).fill(0);
  const monthlyExpense = new Array(12).fill(0);

  transactions.forEach((transaction) => {

    const month = new Date(transaction.date).getMonth();

    if (transaction.type === "Income") {
      monthlyIncome[month] += transaction.amount;
    } else {
      monthlyExpense[month] += transaction.amount;
    }

  });

  const data = {

    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],

    datasets: [

      {
        label: "Income",
        data: monthlyIncome,
        borderColor: "#22C55E",
        backgroundColor: "rgba(34,197,94,.18)",
        fill: true,
        tension: 0.45,
        borderWidth: 4,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBackgroundColor: "#22C55E",
      },

      {
        label: "Expense",
        data: monthlyExpense,
        borderColor: "#EF4444",
        backgroundColor: "rgba(239,68,68,.18)",
        fill: true,
        tension: 0.45,
        borderWidth: 4,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBackgroundColor: "#EF4444",
      },

    ],

  };

  return (

    <div className="monthly-card">

      <div className="monthly-header">

        <div>

          <h2>Monthly Trend</h2>

          <p>
            Income & Expense throughout the year
          </p>

        </div>

      </div>

      <div className="chart-container">

        <Line
          data={data}
          options={{

            responsive: true,

            maintainAspectRatio: false,

            interaction: {
              mode: "index",
              intersect: false,
            },

            plugins: {

              legend: {

                position: "top",

                labels: {

                  boxWidth: 20,
                  boxHeight: 20,
                  padding: 22,

                  font: {
                    size: 16,
                    weight: "bold",
                  },

                  color: "#0F172A",

                },

              },

              tooltip: {

                backgroundColor: "#1E293B",

                padding: 12,

                titleFont: {
                  size: 15,
                },

                bodyFont: {
                  size: 14,
                },

              },

            },

            elements: {

              line: {
                borderWidth: 4,
              },

              point: {
                radius: 5,
                hoverRadius: 8,
              },

            },

            scales: {

              x: {

                grid: {
                  display: false,
                },

                ticks: {
                  font: {
                    size: 14,
                  },
                },

              },

              y: {

                beginAtZero: true,

                grid: {
                  color: "#E5E7EB",
                },

                ticks: {
                  font: {
                    size: 14,
                  },
                },

              },

            },

          }}
        />

      </div>

    </div>

  );

}

export default MonthlyTrend;
