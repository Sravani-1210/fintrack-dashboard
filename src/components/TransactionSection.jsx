import { useState, useEffect } from "react";
import "./TransactionSection.css";
import {
  FaPlus,
  FaWallet,
  FaCalendarAlt,
  FaEdit,
  FaTimes,
} from "react-icons/fa";

function TransactionSection({
  addTransaction,
  editingTransaction,
  updateTransaction,
  cancelEditing,
}) {

  const incomeCategories = [
    "Salary",
    "Freelancing",
    "Investment",
    "Interest",
    "Bonus",
    "Gift",
    "Other Income",
  ];

  const expenseCategories = [
    "Food",
    "Shopping",
    "Travel",
    "Rent",
    "Bills & Utilities",
    "Healthcare",
    "Entertainment",
    "Education",
    "Fuel",
    "Groceries",
    "Vacation",
    "Other Expense",
  ];

  const initialForm = {
    amount: "",
    type: "Income",
    category: "",
    date: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (editingTransaction) {
      setFormData(editingTransaction);
    } else {
      setFormData(initialForm);
    }
  }, [editingTransaction]);

  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "type") {

      setFormData({
        ...formData,
        type: value,
        category: "",
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.amount ||
      !formData.category ||
      !formData.date
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingTransaction) {

      updateTransaction({
        ...formData,
        amount: Number(formData.amount),
      });

    } else {

      addTransaction({
        ...formData,
        id: Date.now(),
        amount: Number(formData.amount),
      });

    }

    setFormData(initialForm);
  };

  const categories =
    formData.type === "Income"
      ? incomeCategories
      : expenseCategories;

  return (

    <div className="transaction-section">

      <div className="section-header">

        <h2>

          {editingTransaction ? (
            <>
              <FaEdit /> Edit Transaction
            </>
          ) : (
            <>
              <FaPlus /> Add Transaction
            </>
          )}

        </h2>

        <p>Record your income and expenses.</p>

      </div>

      <form
        className="transaction-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label>Amount</label>

          <div className="input-icon">

            <FaWallet />

            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={handleChange}
            />

          </div>

        </div>

        <div className="form-row">

          <div className="form-group">

            <label>Type</label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
            >

              <option value="Income">
                Income
              </option>

              <option value="Expense">
                Expense
              </option>

            </select>

          </div>

          <div className="form-group">

            <label>Date</label>

            <div className="input-icon">

              <FaCalendarAlt />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />

            </div>

          </div>

        </div>
                <div className="form-group">

          <label>Category</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >

            <option value="">
              Select Category
            </option>

            {categories.map((category) => (

              <option
                key={category}
                value={category}
              >
                {category}
              </option>

            ))}

          </select>

        </div>

        <div className="form-group">

          <label>Description</label>

          <textarea
            rows="4"
            name="description"
            placeholder="Write a short note..."
            value={formData.description}
            onChange={handleChange}
          />

        </div>

        <div className="button-group">

          <button
            type="submit"
            className="add-btn"
          >

            {editingTransaction ? (
              <>
                <FaEdit /> Update Transaction
              </>
            ) : (
              <>
                <FaPlus /> Add Transaction
              </>
            )}

          </button>

          {editingTransaction && (

            <button
              type="button"
              className="cancel-btn"
              onClick={cancelEditing}
            >

              <FaTimes />

              Cancel

            </button>

          )}

        </div>

      </form>

    </div>

  );
}

export default TransactionSection;