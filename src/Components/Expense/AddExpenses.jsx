import React, { useRef } from "react";
import axios from "axios";
import "./expense.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AddExpenses = () => {
  const Moneyref = useRef();
  const Descriptionref = useRef();
  const Categoryref = useRef();
  const Dateref = useRef();
  const emailsperation = useSelector((state) => state.email.value);

  const onSubmitAddExpenses = async () => {
    const Usermoney = Moneyref.current.value;
    const Description = Descriptionref.current.value;
    const Category = Categoryref.current.value;
    const Date = Dateref.current.value;
    if (Usermoney > 0 && Description == "" && Category == "" && Date == "") {
      alert("PLEASE PUT INFORMATIO CORRECTLY");
      return;
    }

    try {
      await axios.post(
        `https://sgarpner-project-default-rtdb.firebaseio.com/${emailsperation}/Save.json`,
        {
          money: Usermoney,
          description: Description,
          category: Category,
          date: Date,
        }
      );

      alert("Expense added successfully");
    } catch (err) {
      console.error("Error adding expense:", err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div id="Container">
        <div id="addExpensesContainer" className="expenses-container">
          <div className="input-group">
            <label htmlFor="spentMoney">Spent Money</label>
            <input type="number" id="spentMoney" ref={Moneyref} required />
          </div>
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" ref={Descriptionref} required />
          </div>
          <div className="input-group">
            <label htmlFor="category">Category</label>
            <select id="category" ref={Categoryref} required>
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" ref={Dateref} required />
          </div>
          <button onClick={onSubmitAddExpenses}>Add Expenses</button>
        </div>
        <h3 className="expensebuttonshow">
          <Link to="/">Check it out Expenses</Link>
        </h3>
      </div>
    </>
  );
};

export default AddExpenses;
