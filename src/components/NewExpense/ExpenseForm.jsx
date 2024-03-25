import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const currentDate = new Date().toISOString().split('T')[0];
  const minDate = new Date();
  const [formInput, setFormInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: formInput.enteredTitle,
      amount: formInput.enteredAmount,
      date: new Date(formInput.enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setFormInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    console.log(expenseData);
  }

  

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="enteredTitle"
            value={formInput.enteredTitle}
            onChange={formHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="enteredAmount"
            value={formInput.enteredAmount}
            onChange={formHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min={minDate}
            max={currentDate}
            name="enteredDate"
            value={formInput.enteredDate}
            onChange={formHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"
          onClick={submitHandler}
        >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
