import React, { useRef } from "react";
import "./expense.css";
import axios from "axios";

const AddExpenses = () => {
  const Moneyref = useRef();
  const Descriptionref = useRef();
  const Catetgoryref = useRef();
  const Dateref = useRef();

  const OnsumbitAddexpenses = async () => {
    let Usermoney = Moneyref.current.value;
    let Description = Descriptionref.current.value;
    let Category = Catetgoryref.current.value;
    let Date = Dateref.current.value;

    try {
      let reponse = await axios.post(
        `https://sgarpner-project-default-rtdb.firebaseio.com/Save.json`,
        {
          money: Usermoney,
          Description: Description,
          Category: Category,
          Date: Date
        }
      );
      console.log(reponse);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id="Container">
      <div id="addExpensesContainer" className="expenses-container">
        <div className="input-group">
          <label htmlFor="spentMoney">Spent Money</label>
          <input type="text" id="spentMoney" ref={Moneyref} />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" ref={Descriptionref} />
        </div>
        <div className="input-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={Catetgoryref}>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" ref={Dateref} />
        </div>
        <button onClick={OnsumbitAddexpenses}>Add Expenses</button>
      </div>
    </div>
  );
};

export default AddExpenses;
