import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ExpenseEdit = ({
  id,
  money: initialMoney,
  description: initialDescription,
  category: initialCategory,
  date: initialDate,
  onUpdate,
}) => {
  const [money, setMoney] = useState(initialMoney);
  const [description, setDescription] = useState(initialDescription);
  const [category, setCategory] = useState(initialCategory);
  const [date, setDate] = useState(initialDate);
  const emailsperation = useSelector((state) => state.email.value);

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        `https://sgarpner-project-default-rtdb.firebaseio.com/${emailsperation}/Save/${id}.json`,
        {
          money,
          description,
          category,
          date,
        }
      );
      onUpdate(id, money, description, category, date);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default ExpenseEdit;
