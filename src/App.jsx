import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import SummaryCards from "./components/SummaryCards";
import TransactionSection from "./components/TransactionSection";
import RecentTransactions from "./components/RecentTransactions";
import Analytics from "./components/Analytics";
import ExpenseCategories from "./components/ExpenseCategories";
import MonthlyTrend from "./components/MonthlyTrend";
import BudgetForm from "./components/BudgetForm";

import "./App.css";

function App() {

  // ==========================
  // Sidebar
  // ==========================

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ==========================
  // Transactions
  // ==========================

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  // ==========================
  // Budget
  // ==========================

  const [budget, setBudget] = useState(() => {
    const savedBudget = localStorage.getItem("budget");
    return savedBudget ? Number(savedBudget) : 0;
  });

  const [showBudgetModal, setShowBudgetModal] = useState(false);

  // ==========================
  // Edit Transaction
  // ==========================

  const [editingTransaction, setEditingTransaction] = useState(null);

  const cancelEditing = () => {
    setEditingTransaction(null);
  };

  // ==========================
  // Local Storage
  // ==========================

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem(
      "budget",
      budget
    );
  }, [budget]);

  // ==========================
  // Add Transaction
  // ==========================

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  // ==========================
  // Update Transaction
  // ==========================

  const updateTransaction = (updatedTransaction) => {

    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
      )
    );

    setEditingTransaction(null);

  };

  // ==========================
  // Delete Transaction
  // ==========================

  const deleteTransaction = (id) => {

    setTransactions((prev) =>
      prev.filter(
        (transaction) =>
          transaction.id !== id
      )
    );

  };

  // ==========================
  // Calculations
  // ==========================

  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce(
      (sum, t) => sum + Number(t.amount),
      0
    );

  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce(
      (sum, t) => sum + Number(t.amount),
      0
    );

  const balance = income - expense;

  return (

    <div className="app">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="dashboard">

        <Topbar
          setSidebarOpen={setSidebarOpen}
        />

        <SummaryCards
          balance={balance}
          income={income}
          expense={expense}
          budget={budget}
          onBudgetClick={() =>
            setShowBudgetModal(true)
          }
        />

        <div className="content-grid">

          <div className="left-panel">

            <TransactionSection
              addTransaction={addTransaction}
              editingTransaction={editingTransaction}
              updateTransaction={updateTransaction}
              cancelEditing={cancelEditing}
            />

            <RecentTransactions
              transactions={transactions}
              deleteTransaction={deleteTransaction}
              setEditingTransaction={setEditingTransaction}
            />

          </div>

          <div className="right-panel">

            <Analytics
              income={income}
              expense={expense}
            />

            <ExpenseCategories
              transactions={transactions}
            />

          </div>

        </div>

        <MonthlyTrend
          transactions={transactions}
        />

      </main>

      {showBudgetModal && (

        <BudgetForm
          budget={budget}
          setBudget={setBudget}
          closeModal={() =>
            setShowBudgetModal(false)
          }
        />

      )}

    </div>

  );

}

export default App;