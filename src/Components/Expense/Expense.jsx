import React, { useEffect, useState } from "react";
import "./expense.css";
import axios from "axios";
import { Expenses } from "../../assets/images";

const Expense = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://sgarpner-project-default-rtdb.firebaseio.com/Save.json`
      );
      const dataArray = Object.keys(response.data).map((id) => ({
        id: id,
        ...response.data[id]
      }));
      setData(dataArray);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deletetheitems = async (id) => {
    try {
      let response = await axios.delete(
        `https://sgarpner-project-default-rtdb.firebaseio.com/Save/${id}.json`
      );
      const filterarray = data.filter((obj) => obj.id !== id);
      setData(filterarray);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3 id="expenses-title">Expenses</h3>
      <div className="expense-container">
        {data.length > 0 ? (
          data.map((expense) => (
            <div className="expense-item" key={expense.id}>
              <div className="expense-details">
                <div className="expense-label">Money:</div>
                <div className="expense-value">{expense.money}</div>
                <div className="expense-label">Description:</div>
                <div className="expense-value">{expense.description}</div>
                <div className="expense-label">Category:</div>
                <div className="expense-value">{expense.category}</div>
                <div className="expense-label">Date:</div>
                <div className="expense-value">{expense.date}</div>
                <button onClick={() => deletetheitems(expense.id)}>
                  Delete
                </button>
                <button>Edit</button>
              </div>
            </div>
          ))
        ) : (
          <div id="emptybox">
            <div>
              <h4>No Expensese Items are There</h4>
            </div>
            <div>
              <img src={Expenses}></img>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Expense;
