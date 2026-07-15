import "./SummaryCards.css";
import {
  FaWallet,
  FaArrowUp,
  FaArrowDown,
  FaBullseye,
  FaEllipsisV,
} from "react-icons/fa";

function SummaryCards({
  balance,
  income,
  expense,
  budget,
  onBudgetClick,
}) {
  const budgetUsed =
    budget > 0
      ? Math.min((expense / budget) * 100, 100)
      : 0;

  const remainingBudget =
    Math.max(budget - expense, 0);

  const cards = [
    {
      title: "Balance",
      amount: `₹${balance.toLocaleString("en-IN")}`,
      subtitle: "Available Balance",
      icon: <FaWallet />,
      color: "balance",
    },
    {
      title: "Income",
      amount: `₹${income.toLocaleString("en-IN")}`,
      subtitle: "Total Income",
      icon: <FaArrowUp />,
      color: "income",
    },
    {
      title: "Expense",
      amount: `₹${expense.toLocaleString("en-IN")}`,
      subtitle: "Total Expense",
      icon: <FaArrowDown />,
      color: "expense",
    },
    {
      title: "Budget",
      amount: `₹${budget.toLocaleString("en-IN")}`,
      subtitle: `Remaining ₹${remainingBudget.toLocaleString("en-IN")}`,
      icon: <FaBullseye />,
      color: "budget",
      progress: budgetUsed,
      onClick: onBudgetClick,
    },
  ];

  return (
    <div className="summary-grid">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`summary-card ${card.color}`}
          onClick={card.onClick}
          style={{
            cursor: card.onClick ? "pointer" : "default",
          }}
        >

          <div className="card-top">

            <div className="card-icon">
              {card.icon}
            </div>

            <FaEllipsisV className="menu-icon" />

          </div>

          <div className="card-body">

            <h4>{card.title}</h4>

            <h2>{card.amount}</h2>

            <p>{card.subtitle}</p>

            {card.progress !== undefined && (

              <>
                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width: `${card.progress}%`,
                    }}
                  ></div>

                </div>

                <small>
                  {Math.round(card.progress)}% Used
                </small>

              </>

            )}

          </div>

        </div>

      ))}

    </div>
  );
}

export default SummaryCards;