import { useState, useEffect } from "react";
import "./BudgetForm.css";

function BudgetForm({
  budget,
  setBudget,
  closeModal,
}) {
  const [value, setValue] = useState(budget);

  useEffect(() => {
    setValue(budget);
  }, [budget]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value || Number(value) <= 0) {
      alert("Please enter a valid monthly budget.");
      return;
    }

    setBudget(Number(value));
    closeModal();
  };

  return (
    <div className="modal-overlay">

      <div className="budget-modal">

        <h2>🎯 Set Monthly Budget</h2>

        <form onSubmit={handleSubmit}>

          <label>Monthly Budget</label>

          <input
            type="number"
            placeholder="Enter your monthly budget"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <div className="modal-buttons">

            <button
              type="submit"
              className="save-btn"
            >
              Save Budget
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={closeModal}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default BudgetForm;