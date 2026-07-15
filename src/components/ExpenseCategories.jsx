import "./ExpenseCategories.css";
import {
  FaUtensils,
  FaShoppingBag,
  FaCar,
  FaHome,
  FaHeartbeat,
  FaGraduationCap,
  FaMoneyBillWave,
  FaPlane,
  FaBolt,
} from "react-icons/fa";

function ExpenseCategories({ transactions }) {

  const expenses = transactions.filter(
    (t) => t.type === "Expense"
  );

  const categoryTotals = {};

  expenses.forEach((transaction) => {
    if (categoryTotals[transaction.category]) {
      categoryTotals[transaction.category] += transaction.amount;
    } else {
      categoryTotals[transaction.category] = transaction.amount;
    }
  });

  const totalExpense = expenses.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  const getIcon = (category) => {
    switch (category) {
      case "Food":
        return <FaUtensils />;

      case "Shopping":
        return <FaShoppingBag />;

      case "Travel":
        return <FaPlane />;

      case "Fuel":
        return <FaCar />;

      case "Rent":
        return <FaHome />;

      case "Bills & Utilities":
        return <FaBolt />;

      case "Healthcare":
        return <FaHeartbeat />;

      case "Education":
        return <FaGraduationCap />;

      default:
        return <FaMoneyBillWave />;
    }
  };

  return (
    <div className="expense-card">

      <div className="expense-header">
        <h2>Expense Categories</h2>
        <p>Spending breakdown by category</p>
      </div>

      {Object.keys(categoryTotals).length === 0 ? (

        <p className="empty">
          No expense transactions yet.
        </p>

      ) : (

        Object.entries(categoryTotals).map(
          ([category, amount]) => {

            const percentage =
              totalExpense > 0
                ? (amount / totalExpense) * 100
                : 0;

            return (

              <div
                key={category}
                className="category-item"
              >

                <div className="category-top">

                  <div className="category-left">

                    <div className="category-icon">
                      {getIcon(category)}
                    </div>

                    <span>{category}</span>

                  </div>

                  <strong>
                    ₹{amount.toLocaleString("en-IN")}
                  </strong>

                </div>

                <div className="progress">

                  <div
                    className="progress-value"
                    style={{
                      width: `${percentage}%`,
                    }}
                  ></div>

                </div>

              </div>

            );
          }
        )

      )}

    </div>
  );
}

export default ExpenseCategories;
