import React from "react";
import "./expense.css";

const AddExpenses = () => {
  return (
    <div id="Container">
      <div id="addExpensesContainer" className="expenses-container">
        <div className="input-group">
          <label htmlFor="spentMoney">Spent Money</label>
          <input type="text" id="spentMoney" />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" />
        </div>
        <div className="input-group">
          <label htmlFor="category">Category</label>
          <select id="category">
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" />
        </div>
        <button>Add Expenses</button>
      </div>
    </div>
  );
};

export default AddExpenses;
