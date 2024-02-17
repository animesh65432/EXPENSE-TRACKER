import React, { useEffect, useState } from "react";
import axios from "axios";
import { Expenses } from "../../assets/images";
import ExpenseEdit from "./ExpneseEdit";

const Expense = () => {
  const [data, setData] = useState([]);
  const [editItemId, setEditItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

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

  const handleUpdate = (id, money, description, category, date) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          money,
          description,
          category,
          date
        };
      }
      return item;
    });
    setData(updatedData);
    setEditItemId(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://sgarpner-project-default-rtdb.firebaseio.com/Save/${id}.json`
      );
      const filteredData = data.filter((item) => item.id !== id);
      setData(filteredData);
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
                <button
                  onClick={() => handleDelete(expense.id)}
                  className="deleteexpenses"
                >
                  Delete
                </button>
                {editItemId === expense.id ? (
                  <ExpenseEdit
                    {...expense}
                    onUpdate={handleUpdate}
                    onCancel={() => setEditItemId(null)}
                  />
                ) : (
                  <button
                    onClick={() => setEditItemId(expense.id)}
                    className="editbutton"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div id="emptybox">
            <div>
              <h4>No Expense Items are There</h4>
            </div>
            <div>
              <img src={Expenses} alt="No Expenses" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Expense;
