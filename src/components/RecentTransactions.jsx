import "./RecentTransactions.css";
import {
  FaTrash,
  FaEdit,
  FaArrowUp,
  FaArrowDown,
  FaMoneyBillWave,
  FaShoppingBag,
  FaUtensils,
  FaCar,
  FaHome,
  FaHeartbeat,
  FaGraduationCap,
  FaGift,
} from "react-icons/fa";

function RecentTransactions({
  transactions,
  deleteTransaction,
  setEditingTransaction,
}) {
  const getIcon = (category) => {
    switch (category) {
      case "Salary":
      case "Freelancing":
      case "Bonus":
      case "Investment":
      case "Interest":
        return <FaMoneyBillWave />;

      case "Food":
        return <FaUtensils />;

      case "Shopping":
        return <FaShoppingBag />;

      case "Travel":
      case "Fuel":
        return <FaCar />;

      case "Rent":
      case "Bills & Utilities":
        return <FaHome />;

      case "Healthcare":
        return <FaHeartbeat />;

      case "Education":
        return <FaGraduationCap />;

      case "Gift":
        return <FaGift />;

      default:
        return <FaMoneyBillWave />;
    }
  };

  return (
    <div className="recent-transactions">

      <div className="recent-header">
        <h2>Recent Transactions</h2>

        <span>
          {transactions.length} Transaction
          {transactions.length !== 1 ? "s" : ""}
        </span>
      </div>

      {transactions.length === 0 ? (

        <div className="empty-state">
          <h3>No Transactions Yet</h3>
          <p>Add your first transaction.</p>
        </div>

      ) : (

        <div className="transaction-list">

          {transactions
            .slice()
            .reverse()
            .map((transaction) => (

              <div
                className="transaction-card"
                key={transaction.id}
              >

                <div className="transaction-left">

                  <div className="transaction-icon">
                    {getIcon(transaction.category)}
                  </div>

                  <div>

                    <h4>
                      {transaction.category}
                    </h4>

                    <p>
                      {transaction.date}
                    </p>

                  </div>

                </div>

                <div className="transaction-right">

                  <span
                    className={
                      transaction.type === "Income"
                        ? "type income"
                        : "type expense"
                    }
                  >

                    {transaction.type === "Income" ? (
                      <>
                        <FaArrowUp />
                        Income
                      </>
                    ) : (
                      <>
                        <FaArrowDown />
                        Expense
                      </>
                    )}

                  </span>

                  <h3
                    className={
                      transaction.type === "Income"
                        ? "income-text"
                        : "expense-text"
                    }
                  >
                    {transaction.type === "Income"
                      ? "+"
                      : "-"}
                    ₹
                    {Number(
                      transaction.amount
                    ).toLocaleString("en-IN")}
                  </h3>

                  <div className="action-buttons">

                    <button
                      className="edit-btn"
                      onClick={() =>
                        setEditingTransaction(
                          transaction
                        )
                      }
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteTransaction(
                          transaction.id
                        )
                      }
                    >
                      <FaTrash />
                    </button>

                  </div>

                </div>

              </div>

            ))}

        </div>

      )}

    </div>
  );
}

export default RecentTransactions;
